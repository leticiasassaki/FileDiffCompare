const fs = require('fs');

const fileComparatorService = async () => {

    const fileText1 = fs.readFileSync('./src/files/file1.txt', 'utf-8');
    const fileText2 = fs.readFileSync('./src/files/file2.txt', 'utf-8');

    console.log(fileText1);
    console.log(fileText2);
    return (fileText1 === fileText2);

}

module.exports = fileComparatorService