const fs = require('fs');
const path = './test.txt';
// 定义一个变量存储当前文件的大小
let dataSize;
// 查看文件的大小
fs.stat(path, function (err, stat) {
    if (err) throw err;
    dataSize = Math.ceil(stat.size / 1024);
    console.log(`${path}的大小为：${dataSize}KB`);
    if (dataSize > 10) {
        fs.unlink(path, (err) => {
            if (err) throw err;
            console.log(`已删除${path}，他的大小是${dataSize}`);
        })
    }
})

