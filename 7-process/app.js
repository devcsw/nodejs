const process = require('process');
//다양한 프로세스 정보
console.log(process.execPath);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime);
console.log(process.cwd);
console.log(process.cpuUsage);

//현재 코드 완료 후에 콜스택으로 가져와서 실행
setTimeout(()=>{
    console.log('setTimeout');
},10000);

//현재 수행되는 코드가 완료 후에 task que에다 넣기
process.nextTick(() =>{
    console.log('nextTick');
});

for(let i = 0; i < 100; i++){
    console.log('for loop');
}