const http = require('http');

const server =  http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("We are on HomePage")
    }
    else if(req.url === "/about") {
        for(let i = 0; i < 10000; i++) {
            for(let j = 0; j < 10000; j++) {
                console.log(i + " " + j)
            }
        }

        res.end("Here is an information about us")
    }
    else 
        res.end("Error")
}
)

server.listen(3000)