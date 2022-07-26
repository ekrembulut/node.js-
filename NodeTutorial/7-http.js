const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/') {
        res.end("We are at HomePage")
    }
    if(req.url === '/about') {
        res.end("Here is an information about us")
    }
    res.end(`
     <h1>Opps Here is an error!</h1> 
     <p>The page that you want to go could not find  </p>
     <a href="/"> Click and Go to HomePage </a>
    `)
})
server.listen(3000)