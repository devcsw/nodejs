const EventEmitter = require('events'); // events node.js 모듈
const emitter = new EventEmitter();
const a = 1;
const callback1 =(args)=> {
    console.log('first callback -', args);
};

emitter.on('choi', callback1);

emitter.on('choi', (args)=> {
    console.log('second callback -', args);
});

emitter.emit('choi', { message: 1});
emitter.emit('choi', { message: 2});
if (a == 1){emitter.removeAllListeners();};

emitter.emit('choi', { message: 3});
