const amount = 12 
const names = require('./1-names')
const sayHello = require('./2.1-utils')
const data = require('./2-alternative-flavor')
if(amount > 12) {
    console.log("Its over 12")
}
else {
    console.log("Its under 12")
}
console.log("End of program")

console.log("Direction of file is " + __dirname)
// saniye saniye bastırma yapar 

setInterval(() => {console.log("Hi")}, 10000^2)

const myList = ["Susan" , "John" , "Bob"]

console.log(names.name1)
console.log(names.name2)
console.log(data.person1.name)

for (let i = 0; i < myList.length; i++) {
    sayHello(myList[i])
}