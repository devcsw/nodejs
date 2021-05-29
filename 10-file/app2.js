const fs = require('fs').promises;

// promises 이므로
//read a file

fs.readFile('./text.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(console.error);

//writing a file
fs.writeFile('./text.txt', 'hello choi')
    .catch(console.error);

fs.appendFile('./text.txt', 'appendfile')
    // .then(()=> {
    // 비동기식으로 진행하지 않으려면 then 안에서 실행
    // })
    .catch(console.error);

//copy
fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);

//folder
fs.mkdir('sub-folder')
    .catch(console.error);

fs.readdir('./')
    .then(console.log)
    .catch(console.error);

//