const fs = require('fs');

const fileText1 = fs.readFileSync('./files/file1.txt', 'utf-8');
const fileText2 = fs.readFileSync('./files/file2.txt', 'utf-8');

console.log(fileText1);
console.log(fileText2);
console.log(fileText1 === fileText2);