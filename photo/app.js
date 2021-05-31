//사진정리
//1.사용자가 원하는 폴더 이름을 받아온다
const path = require('path');
const os = require('os');
const fs = require('fs');


const folder = process.argv[2];

const workingDir = path.join(os.homedir(), 'Pictures', folder);
console.log(workingDir);

if(!folder || !fs.existsSync(workingDir)) {
    console.error('Please enter folder name in Pictures');
    return;
}
//2.폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir =  path.join(workingDir, 'video');
const capturedDir =  path.join(workingDir, 'captured');
const duplicatedDir  =  path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);
//3.폴더안에 있는 파일들을 해당하는 파일에 이동 시킨다.
fs.promises
.readdir(workingDir)
.then(processFiles)
.catch(console.log);

function processFiles(files){
    files.forEach((file)=>{
        if(isVideoFile(file)){
            move(file, videoDir);
        } else if(isCapturedFile(file)){
            move(file, capturedDir);
        } else if(isDuplicatedFile(files, file)){
            move(file, duplicatedDir);
        }
    });
}

function isVideoFile(file){
    //정규식? 사용법 따로 알아보기
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isCapturedFile(file){
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedFile(files, file){
    // IMG_XXXX -> IMG_EXXX
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')){
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find(f => f.includes(edited));
    return !!found;
}

//파일 이동
function move(file, targetDir){
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}