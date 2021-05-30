let num = 1;

//1초단위로 실행
const interval = setInterval(() => {
    console.log(num++);
}, 1000);


setTimeout(() => {
    console.log('TimeOut!');
    clearInterval(interval);
}, 6000);