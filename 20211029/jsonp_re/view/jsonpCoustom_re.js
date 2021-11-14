
// jsonp请求需要哪些内容作支撑？
// 请求的地址，请求的数据。jsonp的要点就是在后端生成语句返回来调用前端的函数。因此函数名要被后端知道，要被传到后端
function  jsonp({
    url,
    params:{},
    callbackKey='cd',//在请求时，默认回调函数名字保存在cd中cd=callback
    callback
}){
    const callbackName = jsonpcallback;
    params[callbackKey] = callbackName;
    window[callbackName] = callback;
}