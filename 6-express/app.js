import express from 'express'
const app = express();

app.get('/', (req, res, next)=> {
    console.log(req.path)
    console.log(req.header)
    console.log(req.params);
    console.log(req.params.id);

    console.log(req.query);
    console.log(req.query.keyword);
    //res.send('hi');
    res.setHeader('key','value');
    res.status(201).send('created');
});


app.listen(8080);
