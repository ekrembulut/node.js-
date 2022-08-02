const express = require('express');
const path  = require('path');
const app = express()


// using middleware and setup static => sayfanın statik değişkenleri burada tutulut

app.use(express.static('public'));

app.get('/' , (req,res)=>{
    // res.sendFile(path.resolve(__dirname , './navbar-app/index.html'))
    // res.status(200).send("Home Page")
})

app.get('/about' , (req,res)=>{
    res.status(200).send("About Page")
})

app.post('/post' , (req,res)=>{
    res.send("Post Page")
    res.json("Hi Brother")
})

// error message
app.all('*' , (req,res)=>{
    res.status(404).send("Page Not Found")
})

app.listen(3100 , ()=>{
    console.log("Server is running at port 3100")
}) 