const Koa = require('koa');
const app = new Koa();
const Repo = require('ipfs-repo');
const repo = new Repo('/tmp/repo');

repo.init({ cool: 'config' }, (err) => {
    if (err) {
      throw err
    }
  
    repo.open((err) => {
      if (err) {
        throw err
      }
  
      console.log('repo is ready')
    })
})
// x-response-time

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