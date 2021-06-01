const http = require('http');
const fs = require('fs');
//const http2 = require('http2');

const server = http.createServer((req, res)=> {
    // console.log('incoming');
    // console.log(req.headers);
    // console.log(req.httpVersion);
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
            
        const read = fs.createReadStream('./html/index.html');
        read.pipe(res);
    } else if (url === '/courses'){
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    
    }
    res.end();
}) ;

server.listen(8080);
//createserver 리스너를 등록하거나 옵션을 줘서 설정가능.
//자바에서는 아파치 톰캣을 설치해야하지만 노드에선 바로사용가능