function sayHello() {
    console.log('hello'); 
}

function calculate (x,y){
    console.log('calculating..');
    const result  = x + y;
    console.log('result:' , result);
    sayHello();
    return result;
}

calculate(1,2);

const stop = 4;
console.log('..... loop .....');
for (let i = 0; i <10; i++){
    console.log('count', i);
    if(i === stop) {
        break;
    }
}
//debug 실시간으로 원하는 조건으로 멈추거나, 내용들 확인가능.
//create a launch.json file 클릭하면