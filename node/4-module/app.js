//console.log(count);
//console.log(getCount());
//browser import export 명시해줘야한다.

//require 모듈 가져오기
const counter = require('./counter.js')

counter.increase();
console.log(counter.getCount());
