const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
    console.log('d');
});

const http = require('http');
const server = http.createServer((req, res) => {
    //이거보다는
    // fs.readFile('file.txt', (err, data)=>{
    //     res.end(data);
    // });
    //stream으로 하는게 낫다. 이유는 따로 공부할것!
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});
server.listen(3000);