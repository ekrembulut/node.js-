const { createReadStream } = require('fs');

const verileriYaz = createReadStream('./content/big.txt' , {highWaterMark:  1024}); 

verileriYaz.on('data' , (result)=> {
    console.log(result)
})
verileriYaz.on('error' , (err)=> {
    console.log(err)
})