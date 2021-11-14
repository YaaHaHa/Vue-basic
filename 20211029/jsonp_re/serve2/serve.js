const Koa = require('koa');
const app = new Koa();

const data = [
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' }
]

app.use(async (ctx, next) => {
    if (ctx.path === '/api/jsonp') {
        // 从请求中拿参数
        // cd里面存的是需要后台返回回调函数的名字
        // id是前端给的数据，拿到前端给的数据去响应，把需要返回的数据作为返回函数的参数
        const { cd, id } = ctx.query;
        const title = data.find(item => item.id == id)['title'];
        // ctx.body = `${cd}(${title})`;
        ctx.body = `${cd}${JSON.stringify({title})}`
        console.log(ctx);
    }
})
console.log('8080监听中');
app.listen(8080);