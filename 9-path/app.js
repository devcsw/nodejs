const path = require('path');

console.log(__dirname);
console.log(__filename);

// 구분자
console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed =path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log('isAbsoulte?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

//normalize
console.log(path.normalize('./folder////sub'));

//join 
console.log(__dirname + path.sep +'image');
console.log(path.join(__dirname, 'image'));

//운영체제별로 경로 표기법이 다를 수 있으니 path.sep이나 join 활용

