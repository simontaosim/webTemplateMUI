const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const send = require('koa-send');
const router = new Router();
const readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

router.get('/', async (ctx, next) => {
  ctx.body = await readFileThunk(path.resolve('./','build','index.html'));
})
.get('/api/site/home', async (ctx, next) => {
  ctx.body = 'hello world'
});





const routes = router.routes();
const allowedMethods = router.allowedMethods();
module.exports = routes;
module.exports = allowedMethods;