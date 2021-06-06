import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({message: errors.array() });
};

app.post(
    '/users', 
    [
    body('name').trim().isLength({min: 2, max: 10}).withMessage('이름은 2글자이상 10글자 이하'),
    body('age').isInt().withMessage('숫자를 입력해 주세요'),
    body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(),
    validate,
    ],
    (req, res, next) => {
    //if(req.body.email..){
    //    res.status(400).send({message: 'email'});
    //} else if() ....
    console.log(req.body);
    res.sendStatus(201);
});

app.get('/:email',
    [param('email').isEmail().withMessage('이메일 입력해줏요'), validate],
    (req, res, next) => {
    res.send('email');
});

app.listen(8080);