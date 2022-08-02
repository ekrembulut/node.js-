const express = require('express')
const app = express()

let { people }  = require('./data')

app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

app.get('/' , (req , res) => {
    res.send("Hello World")
})
app.get('/api/people' , (req , res) => {

    res.status(200).json( {
        success : true,
        data : people
    })
})

app.post('/api/postman/people' , (req , res) => {
    const { id  , pName } = req.body

    if(!pName) {
        return res.status(400).json( {
            success : false,
            message : "pName and id are required"
        })
    }
    res.status(201).json({
        success : true,
        data : [
            id ,
            pName,
            
        ]
})
})

app.put('/api/postman/update/:id' , (req , res) => {
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res.status(404).json( {
            success : false,
            message : "Person not found with id " + id
        })
    }
    const updatedPerson = people.map(person => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
     res.status(200).json( {
        success : true,
        data : updatedPerson
     })

})

app.listen(3100 , () => {

    console.log("Server is running...")

}) 
