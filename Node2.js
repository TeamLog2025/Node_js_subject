import path from 'path';

const filename = "dir_pt.js";

console.log("파일명: ", path.basename(filename));
console.log("확장자: ", path.extname(filename));
console.log("디렉토리명: ", path.dirname(filename));
