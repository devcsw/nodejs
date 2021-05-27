console.log('logging....');
console.clear;

//log leve
console.log('log');     //개발
console.info('info');   //정보
console.warn('warn');   //경보
console.error('error'); //에러, 사용자 에러, 시스템 에러

//배포했을때 서버의 심각성을 쉽게 알 수 가 있음.
//개발 할때 부터 레벨별로 다르게 콘솔로그를 작성

//assert - 값이 다를때 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!'); 

//print object
const student = {name:'choi', age: 50, company: {name:'AC'}};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors:false, depth:0});

//measuring time
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop');

//counting
function a() {
    //함수 실행 횟수 체크
    console.count('a function');
}
a();
//실행 횟수 리셋
console.countReset('a function');
a();

//trace

function f1() {
    f2();
}
function f2() {
    f3();
}
function f3 () {
    console.log('f3')
    console.trace();
}
f1();
f2();
f3();