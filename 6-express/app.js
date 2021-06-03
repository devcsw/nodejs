import express from 'express'
const app = express();

app.all('/api', (req,res,next) => {
    console.log('all1');
    next(); 
});

app.use('/sky', (req,res,next) => {
    console.log('use1');
    next(); 
});


app.get('/', 
    (req, res, next) => {
        console.log('first');
        res.send('hello'); //send 하면 다른건 진행안하고 끝
        next();
        //next('route'); //같이 등록된 배열을 무시하고 진행 
    },           
    
    (req, res, next) => {
        console.log('first2');
        next(new Error('error'));
    }
);
//
app.get('/', (req, res, next)=> {
    console.log('second');
});

app.use((req,res, next) => {
    res.status(404).send('404 not Found')
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('sorry');
});

app.listen(8080);

