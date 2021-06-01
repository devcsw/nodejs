const http = require('http');
//const http2 = require('http2');

const server = http.createServer((req, res)=> {
    console.log('incoming');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('welcome!');
    res.end();
}) ;

server.listen(8080);
//createserver 리스너를 등록하거나 옵션을 줘서 설정가능.
//자바에서는 아파치 톰캣을 설치해야하지만 노드에선 바로사용가능