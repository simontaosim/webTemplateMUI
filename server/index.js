'use strict'

const Koa = require('koa');
const app = new Koa();

const series = require('async-series');

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

// const Repo = require('ipfs-repo');
// const repo = new Repo();
// const IPFS = require('ipfs');
// const node = new IPFS({
//   repo: __dirname+'/db/taosim',
//   init: true, // default

//   start: false, // default
//   // start: false,
//   pass: undefined,// default
//   // pass: 'pass phrase for key access',
//   EXPERIMENTAL: { // enable experimental features
//     pubsub: true,
//     sharding: true, // enable dir sharding
//     dht: true // enable KadDHT, currently not interopable with go-ipfs
//   },
//   libp2p: { // add custom modules to the libp2p stack of your node
//     modules: {}
//   }
// })
// let fileMultihash


const IPFSFactory = require('ipfsd-ctl')
const f = IPFSFactory.create({type: 'js'})

f.spawn(
      {
        repoPath:  __dirname+'/db/taosim', 
        init: true,
        start: true,
        disposable: false,
        
      }, function (err, ipfsd) {
        if (err) { throw err };
        series([
            (cb) => ipfsd.start([], (err, ipfsd) => {
                ipfsd.id((err, id) => {
                  console.log(id);
                  cb();
                });
            }),
            (cb) => ipfsd.setConfig('API.HTTPHeaders.Access-Control-Allow-Methods', '["PUT", "GET", "POST", "OPTIONS"]' , function(err){
              console.log(err)
              cb();
            }),
            (cb) => ipfsd.setConfig('API.HTTPHeaders.Access-Control-Allow-Credentials', '["true"]' , function(err){
              console.log(err)
              cb();
            }),
            (cb) =>ipfsd.setConfig('API.HTTPHeaders.Access-Control-Allow-Headers', '["Authorization"]', function(err){
              console.log(err)
              cb();
            }),
            (cb) => ipfsd.setConfig('API.HTTPHeaders.Access-Control-Expose-Headers', '["Location"]', function(err){
              console.log(err)
              cb();
            }),
            (cb) => ipfsd.setConfig('API.HTTPHeaders.Access-Control-Allow-Origin', '["*"]', function(err){
              console.log(err)
              cb();
            }),
            
            (cb) => ipfsd.getConfig('', (err, config) => {
              console.log(JSON.stringify(config));
              // return cb();
            }),
        ])
       
        
        
        
        
     
  
})