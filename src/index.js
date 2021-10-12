const fs = require('fs');

var fileText1 = fs.readFileSync('./files/file1.txt', 'utf-8');
var fileText2 = fs.readFileSync('./files/file2.txt', 'utf-8');

console.log(fileText1);
console.log(fileText2);
console.log(fileText1 === fileText2);