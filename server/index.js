const Koa = require('koa');
//import api routes
const routes = require('./routes');
const allowedMethods = require('./routes');
const send = require('koa-send');
const path = require('path');

//==================

const User = require('./models/User');
let user = new User("haha");
console.log(JSON.stringify(user));
console.log(JSON.stringify(user.save()));


const app = new Koa();


app.use(routes);



app.use(async ctx => {
  await send(ctx, ctx.path, { root: path.resolve('./client','build','static') });
});
app.listen(8361);
