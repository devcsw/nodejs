let count = 0;

export function increase() {
    count++;
}

export function getCount(){
    return count;
}

// module.exports.getCount = getCount;
// module.exports.increase = increase;
// //exports = {}; exports에 다른값을 할당하면 하단 값이 출력이 안되기 때문에 module로 지정해주는게 좋다.
// //exports.increase = increase; 

// console.log(module);