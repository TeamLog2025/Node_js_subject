import fs from 'fs';

fs.writeFile('input.txt', "filename input.txt!", (err => {
    if(err)
        throw err;
    console.log("파일이 생성되었습니다.");
    
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err)
            throw err;
        console.log("파일 내용: ", data);
    });
}));
