const path = require('path')

const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');

const home   = serve(path.join(__dirname)+'/public/');

const hello = ctx => {
  ctx.response.body = 'Hello World';
};

// 3.分配路由
app.use(home); 
app.listen(3000);