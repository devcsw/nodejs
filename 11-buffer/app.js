//fixed-size 메모리의 덩어리
// array of integers, byte of data
const fs = require('fs');
const buf = Buffer.from('Hi');
console.log(buf);
//<Buffer 48 69>

console.log(buf.length);
console.log(buf[0]); //72
console.log(buf[1]); //105
console.log(buf.toString('utf-8') ); //Hi


//create
const buf2 = Buffer.alloc(6);
const buf3 = Buffer.allocUnsafe(5);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2);
console.log(buf3);

//concat
const newBuf = Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());