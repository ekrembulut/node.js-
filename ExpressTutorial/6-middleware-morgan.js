const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const PORT = 3000




/* normal şartlarda logger fonksiyonunu get metodlarında tanımladığımızda içine parametre vermemiz gerekirdi (req , res) ama 
middleware sayesinde bunu kendisi yapıyor . loop a sokmamak için ya res kullanacağız ya da next diyerek diğer middleware 
fonksiyonuna geçeceiz
*/


app.get('/' , (req, res) => {

    res.send("Home Page")
})

// app.use("/about/v3" ,  authorize)

app.use(morgan('tiny'))

app.get('/about' ,(req, res) => {
    console.log(req.user)
    
    res.send("About Page")
})

app.get('/about/v1' ,(req, res) => {
    res.send("About Page")
})

app.get('/about/v3' ,(req, res) => {
    console.log(req.user)
    res.send("Version 3 "  + req.user)
})

app.get('/about/v8' , [logger , authorize]  ,(req, res) => {
    res.send("About Page")
})



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})