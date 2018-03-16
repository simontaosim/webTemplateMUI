'use strict'
const path = require('path');
const send = require('koa-send');
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    console.log(path.join(__dirname, '../build'));
    
    await send(ctx, 'manifest.json', {root: path.join(__dirname, '../build')});
  
})

app.listen(8361);
