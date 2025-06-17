import crypto from 'crypto';


const password = "SnowFairy";
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log('생성된 SHA-256 헤시: ', hash);
