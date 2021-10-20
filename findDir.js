const fs = require('fs');
/* 
    思路：
        判断当前是否是文件夹，是就获取文件夹下的所有目录，判断是否是文件夹，是就继续深入

*/
// PATH是要找的文件夹
let PATH = "Data"
function findAll(path) {
    // 判断给函数传递的这个参数是不是一个文件夹的路径
    fs.stat(path, (err, stat) => {
        if (err) throw err;
        //   获取路径为PATH的文件类型，是否是文件夹
        let this_stat = stat.isDirectory();
        //   是文件夹就获取他里面的文件目录，判断每一个文件是否文件夹，这里是第一层，地址是给findAll传的参数
        if (this_stat) {
            fs.readdir(path, (err, file) => {
                if (err) throw err;
                // 遍历PATH文件中的所有文件，找出来文件夹继续遍历
                file.forEach((i) => {
                    //   用stat判断是不是文件夹，是就继续递归
                    // console.log(path+"/"+i);
                    console.log(path+"/"+i+"的大小"+Math.ceil(stat.size / 1024)+"KB");
                    findAll(path+"/"+i);
                })
            })
        }
        
    })
}

// 给一个最顶层的文件夹，让他自己遍历去
findAll(PATH);