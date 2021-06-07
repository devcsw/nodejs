const jwt = require('jsonwebtoken');

const secret ='awlekfmanwlgewnalgk';

const token = jwt.sign({
    id: 'userId',
    isAdmin: false,
    
}, secret,
    {expiresIn: 2}
);

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);
    
