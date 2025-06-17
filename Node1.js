import os from 'os';

console.log("플렛폼: ", os.platform());

const totalMemory = (os.totalmem / (1024 * 1024 * 1024)).toFixed(2);
const freeMemory = (os.freemem / (1024 * 1024 * 1024)).toFixed(2);

console.log("총 메모리: ", totalMemory, 'GB');
console.log("가용 메모리: ", freeMemory, 'GB');
console.log("CPU 코어 갯수: ", os.cpus().length, '개');
