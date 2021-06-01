const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const { resolveSoa } = require('dns');

const name = "choi"
const courses = [
    {name : 'HTML'},
    {name : 'JavaScript'},
    {name : 'node.js'},
];

const server = http.createServer((req, res)=> {
    const url = req.url; // what?
    const method = req.method; // how?, action?
    if (url ==='/courses'){
        if(method === 'GET'){
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(JSON.stringify(courses));
        } else if(method === 'POST') {
            const body = [];
            req.on('data', (chunk)=>{
                console.log(chunk);
                body.push(chunk);
            });

            req.on('end', ()=>{
                const course =JSON.parse(Buffer.concat(body).toString());
                console.log(course);
                courses.push(course);
                res.writeHead(201);
                res.end();
            });
        }
    }
}) ;

server.listen(8080);