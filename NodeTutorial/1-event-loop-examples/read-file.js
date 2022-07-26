const {readFile} = require('fs');

console.log("Okuma işlemi başladı")

readFile ('./content/first.txt', 'utf8', (err, data) => {
    if(err)  {
        console.log(err)
    }
    console.log(data)
})

console.log("Okuma işlemi bitti")