const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('methods-public'));
app.use(express.urlencoded({extended:false}));
app.get('/api/user/:id' , (req,res) => {
    const id = req.params.id;
    const user = people.find(person => person.id === Number(id));
    res.status(200).json( {
        succes : true,
        data : user
    })
})

app.post('/login' , (req,res) => {
    const {name} = req.body

    if(name) {
        return res.status(200).send("Hello " + name)
    }
    else {
        return res.status(401).send("Name is required")
    }
    
}
)

const PORT = 3100

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})

