const fs = require('fs');
// 文件夹地址path
const PATH = "./test"

//  创建一个常量保存获取到的文件中的文件
let dirFiles;
fs.readdir(PATH, (err, files) => {
    if (err) throw err;
    //   把获取到的文件名数组存起来
    dirFiles = files;
    console.log(typeof dirFiles);
    // 遍历文件
    dirFiles.forEach((f) => {
        // 读出PATH目录下每一个文件的大小
        let fileName=PATH+'/'+f
        fs.stat(fileName, (err, stat) => {
            if (err) throw err;
            let fileSize=Math.ceil(stat.size / 1024)
            console.log(fileName+"的大小是："+ fileSize+"KB");
            // 判断每一个文件的大小，决定是否删除
            if(fileSize >= 50){
                fs.unlink(fileName,(err)=>{
                    if (err) throw err;
                    console.log('成功删除'+fileName+"大小："+fileSize);
                })
            }
        })

    })
})


