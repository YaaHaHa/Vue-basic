const Koa = require('koa');
const app = new Koa();
const items = [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]

app.use(async (ctx, next) => {
  if (ctx.path === '/api/jsonp') {
    const { cb, id } = ctx.query;
    const title = items.find(item => item.id == id)['title']
    // 后端拿到回调函数cd，然后以函数调用的方式写入返回体
    ctx.body = `${cb}(${JSON.stringify({title})})`; //这里的返回体到了前端就成了jsonpCallback(title)，执行调用函数了属于是
    return;
  }
})
console.log('listen 8080...')
app.listen(8080);