//정의 하면 vsc에서 node라는걸 확인 가능
const fs = require('fs');

console.log(global)

//global은 전역 객체
global.hello = () => {
    console.log('hello');
    global.console.log('hello');
};

//global은 생략 가능
global.hello();

hello();