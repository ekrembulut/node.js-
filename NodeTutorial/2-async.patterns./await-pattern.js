// direkt promise kullanımı 

const {readFile, writeFile} = require('fs').promises;

// kütüphane ile promise kullanımı

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const veriOku1 = async () => {
    try {
        const first = await readFilePromise('./content/first.txt' ,  'utf8');
        console.log(first) 
        const second = await readFilePromise('./content/second.txt' , 'utf8');
        console.log(second)
        await writeFilePromise('./content/write-file4.txt' , first + second)
    }
    catch (err) {
        console.log("Sorun bulundu : " +  err)
    }
}
// readFile('./content/first.etxt', 'utf8', (err, data) => {
//     if(err) {
//         return
//     }
//     else {
//         console.log(data)
//     }
// })

// promise kullanımı  

function fileReader (data) {
    return new Promise((resolve, reject) => {
        readFile(data, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}




// try catch async await kavramları  

const veriOku = async () => {
    try {
        const first = await fileReader('./content/first.txt');
        console.log(first) 
        const second = await fileReader('./content/second.txt');
        console.log(second)
    }
    catch (err) {
        console.log("Sorun bulundu : " +  err)
    }
}

// veriOku()
veriOku1()


// fileReader('./content/first.txt').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

