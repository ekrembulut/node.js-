const http = require('http');
const {readFileSync} = require('fs');

const readedFile = readFileSync('./navbar-app/index.html');
const css = readFileSync('./navbar-app/styles.css');
const js = readFileSync('./navbar-app/browser-app.js');
const myLogo = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req , res)=>{
    // console.log(req.url)
    
    const url = req.url;
    if(url === '/') {
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.write(readedFile)
    res.end()
    }
    // style dosyası
    else if(url === '/styles.css') {
        res.writeHead(200 , {'content-type' : 'text/css'})
        res.write(css)
        res.end()
    }
    // javascript dosyası
    else if(url === '/browser-app.js') {
        res.writeHead(200 , {'content-type' : 'text/javascript'})
        res.write(js)
        res.end()
    }
    // logo dosyası
    else if(url === '/logo.svg') {
        res.writeHead(200 , {'content-type' : 'image/svg+xml'})
        res.write(myLogo)
        res.end()
    }
    else if(url === '/about') {
        res.writeHead(200 , {'content-type' : 'text/html'})
        res.write("<h1> AboutPage</h1>")
        res.end()
    }
    else if(url === '/contact') {
        res.writeHead(200 , {'content-type' : 'text/html'})
        res.write('<h1>Contact Page</h1>') 
        res.end()
    }
    else {
        res.writeHead(404 , {'content-type' : 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(3000)