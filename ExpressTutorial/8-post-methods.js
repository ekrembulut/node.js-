const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.urlencoded({ extended: false }))

app.use(express.static('methods-public'))

app.use(express.json())

app.get('/api/people' , (req, res) => {

    res.status(200).json( {
        success : true,
        data : people
    } )

})



app.post('api/people' , (req, res) => {
    const {name} = req.body
    console.log("Hello")
    if(!name) {
        return res.status(400).json( {
            success : false,
            message : "Name is required"
        })
    }
    res.status(201).send({
        success : true,
        data : name
    })
})

app.post('api/postman/people' , (req, res) => {
    const {name} = req.body

    if(!name) {
        return res.status(400).json( 
            {
                success : false,
                message : "Name is required"
            }
        )
    }
    res.status(201).send({
        success : true,
        data : [
            ...people,
            name
        ]
    })
})
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
  })
  
// app.get('/api/people/:id' , (req, res) => {
    
//     const id = req.params.id;
// if(people.id = Number(id)) {
//     res.status(200).json( {
//         success : true,
//         data : people[id-1]
//     } )
// }

// }
// )

app.post('/login' , (req , res)=> {
    console.log(req.body.name)

    if(req.body.name) { 
        return res.status(200).send("Welcome " + req.body.name)
    }
    else {
        return res.status(404).send("Name is required")
    }    
})

app.post('/login' , (req, res) => {
    res.send('Veri gönderimi başarılı')
    
})
app.get('/user',(req,res)=>{
    res.send('User is here')
})

app.listen(3100, () => { console.log("Server is running...") })



