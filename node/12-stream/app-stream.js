const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
//    highWaterMark: 8, //default 64 kbytes
//    encoding: 'utf-8',
});

const data = [];

readStream.on('data', (chunk)=> {
   // console.log(chunk);
   data.push(chunk);
   console.count('data');
});
readStream.on('end', ()=>{
    console.log(data.join(''));
});
readStream.on('error', (error)=> {
    console.log(error);
});