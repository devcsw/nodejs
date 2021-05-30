const fs = require('fs');

// 3
// rename(...., callback(error, data)) 비동기
// try {renameSync(....)} catch(e) { } 에러사항을 잡아주지 않으므로 try catch 활용
// promises.rename().then().catch(0)

//fs.renameSync('./text1.txt', '.text-new.txt');
//console.log('hello');  실행되지 않음.


// try {
//     fs.renameSync('./text1.txt', '.text-new.txt');
// } catch (error) {
//     console.log(error);
// }
// console.log('hello'); 에러 잡고 실행됨.

//정상 실행
try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.log(error);
}
console.log('hello');

//비동기 실행
fs.rename('./text-new.txt', './text.txt', (error) =>{
    console.log(error);
});
console.log('hello2');

fs.promises.rename('./text2.txt', './text-new.txt')
.then(()=> console.log('Done!'))
.catch(console.error);

//싱크보단 promises나 callback 형태로 사용