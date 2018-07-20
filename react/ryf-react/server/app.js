const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();
const router = require('./routers/index');

// 组件  在koa中叫做中间件 middleware
// const main = ctx => {
//     ctx.response.body = 'Hello world!';
// }
// // 挂载
// app.use(main);
app.use(cors({
    origin: 'http://localhost:3000',
    exposeHeaders: ['WWW-Authenticate', 'Srver-Authenticate'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
app.use(router.routes());

app.listen(3006);
console.log('app started at port 3006...');