const fs = require('fs');
const http = require('http');

 http.createServer((req, res) => {
    //  const file = fs.readFileSync('./content/big.txt');
    const fileStream = fs.createReadStream('./content/big.txt' , 'utf-8');
    fileStream.on('open' , ()=> {
        fileStream.pipe(res);
    })
    fileStream.on('error' , (err)=> {
        res.end(err);
    })
 }).listen(3000);