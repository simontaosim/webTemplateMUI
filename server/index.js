const path = require('path');
const Koa = require('koa');
const send = require('koa-send');
const routes = require('./routes.js');
const Site = require('./models/Site.js');


const app = new Koa();

app.use(async (ctx, next) => {
  let site = null;
  switch(ctx.header.hostname){
    case "taosim.net":
      ctx.state = Object.assign({},ctx.state,{
        sitename: "taosim.net",
        title: "道者网",
      } );
      site = new Site(); 
      await next(ctx);
      break;
    default:
      ctx.state = Object.assign({},ctx.state,{
        hostname: "taosim.net",
        title: "道者网"
      } );
      site = await new Site(ctx.state.sitename, ctx.header.hostname);
      let currentSite = await site.getByHostname(ctx.state.hostname);
      if(!currentSite){
        console.log('当前没有网站，请使用种子数据');
        
      }
      
      
            
      await next(ctx);
      break;
  }
});
app.use(routes);

app.use(async (ctx) => {
      const regex = /\Sapi\S/;
      if(!ctx.path.match(regex)){
       await send(ctx, ctx.path, { root: path.resolve('./client','build') });
      }
    
  }
);


app.listen(8361);
console.log("listen on 8361");
