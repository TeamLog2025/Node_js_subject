import fs from 'fs';
import path from 'path';

fs.readdir('.', (err, files) => {
    if(err)
        throw err;
    console.log("현재 디렉토리 파일/폴더 목록:");
    files.forEach(file => {
        console.log(path.basename(file));
    })
})
