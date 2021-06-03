import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true,
    })
);

app.get('/', (req, res) =>{
    res.send('Welcome!');
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // res.setHeader(
    //     'Acess-Control-Allow-Methods',
    //     'OPTIONS, GET, POST, PUT, DELETE'
    // );

});

app.listen(8080);