import express from 'express'
const app = express();

app.use(express.json());

app.get('/file1', async (req, res) => {
try{
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
} catch (error) {
    res.sendStatus(400);
}
    
});

app.get('/file2', (req, res) => {
    return fsAsync
    .readFile('/file.txt')
    .then((data)=> res.send(data)) 
    //.catch((error) => res.sendStatus(404));
});
app.get('/file3', async function (req, res) {
    // try{
    const data = await fsAsync.readFile('/file2.txt');
    res.send(data);
    // }
    // catch{
    //     res.sendStatus(404);
    // }

});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({message:'Something went wrong'})
})

app.listen(8080);

