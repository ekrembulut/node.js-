const { readFile }  = require('fs');
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

fileReader('./content/first.txt').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
// short way
const readFile1 = async (data) => {
    const firstItem = await readFile1('content/first.txt', 'utf8');
    console.log(firstItem)
    const secondItem = await readFile1('content/second.txt', 'utf8');
}