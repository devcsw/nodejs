function hello() {
    console.log(this);
    console.log(this === global);
    //함수안에서의 this 는 global object
}
hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this);
        console.log(this === global);
        //class에서 this 는 class 자기자신
    }
}

const a = new A(1);
a.memberFunction();

//아무 상태도 아닐때 this(browser)
console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports); //this는 모듈을 가르킴
