const { writeFileSync , readFileSync, fstat } = require('fs');

const firstText = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(firstText , second) 

writeFileSync('./content/write-file.txt' , 
    `Here is results :  ${firstText} ${second}` , {flag : "a"})