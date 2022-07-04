const path = require('path');

const currentPath = path.join("content" , "subfolder" , "test.txt");

console.log(currentPath)

const base = path.basename(currentPath);

console.log(base)

const absolutePath = path.resolve(__dirname , currentPath)

console.log(absolutePath)
