const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
//const http2 = require('http2');

const name = "choi"
const courses = [
    {name : 'HTML'},
    {name : 'JavaScript'},
    {name : 'node.js'}
]
const server = http.createServer((req, res)=> {

    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
            ejs.renderFile('./template/index.ejs', {name})
            .then((data)=>res.end(data));
    } else if (url === '/courses'){
        ejs.renderFile('./template/courses.ejs', {courses})
            .then((data)=>res.end(data));
    } else {
        ejs.renderFile('./template/not-found.ejs', {name})
            .then((data)=>res.end(data));
    
    }
}) ;

server.listen(8080);
//createserver 리스너를 등록하거나 옵션을 줘서 설정가능.
//자바에서는 아파치 톰캣을 설치해야하지만 노드에선 바로사용가능