// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     const file = fs.createReadStream('./content/big.txt');
//     file.on('open' , ()=> {
//         file.pipe(res);
//     })
//     file.on('error' , (err)=> {
//         console.log(err)
//     })
// }).listen(3000);

const fs = require('fs');
const http = require('http');

 http.createServer((req, res) => {
     const file = fs.readFileSync('./content/big.txt');
        res.end(file);
 }).listen(3000);