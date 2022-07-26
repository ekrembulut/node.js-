const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('event1' , ()=> {
    console.log("Event 1 is triggered")
})
customEmitter.emit('event1')

customEmitter.on('event1' , (name , id)=> {
    console.log("Name is " + name + " and id is " + id)
})

customEmitter.emit('event1' , "Ali" , "1")

customEmitter.emit('event1')

// htttp ile event kullanımına örnek şekildeki gibidir 

/*
const http = require('http');

const serverSide = http.createServer()

serverSide.on('request' , (req, res) => {
    if(req.url === '/a') {
        res.end('A')
    }
})

serverSide.on('request', (req, res) => {
    res.end("Hello World")
})

serverSide.listen(3000)
*/