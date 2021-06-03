import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const corsOption = {
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true,
    };
//middleware 등록
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined')); //
app.use(cors(corsOption)); //서버에 허락해주는 것
app.use(helmet()); //공통적인 보안에 필요한 것들을 추가해줌


app.get('/', (req, res) =>{
    
    console.log(req.body);
    console.log(req.cookies); //undefined 쿠키파서 import
    console.log(req.cookies.yummy_cookie);
    res.send('welcome');
});

//
app.listen(8080);