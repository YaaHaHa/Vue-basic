
/* 

    jsonp的目的：跨域请求，带着参数去请求，收到服务器返回的数据并处理


*/
function JSONP({
    url,    //请求参数的地址
    params = {},    //参数对象，遍历这个对象生成访问地址
    callbackKey = 'cd', //与后台约定回调函数是参数的哪个字段，如cd
    callback    //回调函数
}) {
    // 定义回调函数的名称
    const callbackName = 'jsonpCallback';
    // 把这个名称添加到参数中cd='jsonpCallback'
    params[callbackKey] = callbackName;
    // 添加到window中才能被调用
    window[callbackName] = callback;

    // 生成请求地址id='1'&cd='jsonpCallback'
    const paramString = Object.keys(params).map((key) => {
        return `${key}=${params[key]}`
    }).join('&');
    // 创建script标签，添加到body里面
    const script = document.createElement('script');
    script.setAttribute('url', `${url}?${paramString}`);
    document.body.appendChild(script);
}

JSONP({
    url: 'http://localhost:8080/api/jsonp',
    params: { id: 1 },
    callbackKey: 'cd',
    callback: (res) => {
        console.log(res);
    }
}) 

/* function JSONP({
    url,
    params={ },
    callbackKey = 'cd',
    callback
}) {
    // 定义回调函数的名称
    const callbackName = 'jsonpcallback'
    // 把回调函数的名称添加到params中
    params[callbackKey] = callbackName;
    // 添加函数到window中
    window[callbackName] = callback;

    // 生成请求地址,id=1&cd=jsonpcallback
    const paramString = Object.keys(params).map(key => {
        return `${key}=${params[key]}`
    }).join('&')

    const script = document.createElement('script');
    script.setAttribute('url', `${url}?${paramString}`);
    document.body.appendChild(script);
} */

/* JSONP({
    url: 'http://localhost:8080/api/json',
    params: { id: 1 },
    callbackKey='cd',
    callback:(res)=>{
      console.log(res);
    }
}) */