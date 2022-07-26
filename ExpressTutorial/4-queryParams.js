const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/' , (req , res) => {
    res.send('<h1>Ana Sayfa </h1><a href="/api/products">Products</a>')
})

app.get('/api/products' , (req , res) => { 
    const newProducts = products.map(product => {
        const{ id , name , image} = product
        return { id , name , image }
    })
    res.json(newProducts)
})

app.get('/api/products/:ordekEkrem' , (req , res) => {
    console.log( "Parametre 1 " + req.params)
    const { ordekEkrem } = req.params
    console.log("Parametre 2 " +   ordekEkrem)
    const singleProduct = products.find(products => products.id === Number(ordekEkrem))

    if(!singleProduct){
        res.status(404).json({ message: 'Product not found' })
    }
    else {
        res.json(singleProduct)
    }

    
})

// Route params

app.get('/api/products/:ordekEkrem/new/:productName' , (req , res) => {
   const urunAdi = req.params.productName
    console.log(req.params)
    res.send("Hello . Product name is " + urunAdi)

    
})

//  Query Params

app.get('/api/v1/query' , (req , res) => {
    console.log(req.query)
    let searchProduct = [...products]
    const {search , limit} = req.query

   if(search){
       searchProduct = searchProduct.filter(product => product.name.startsWith(search))
   }
    if(limit){
        searchProduct =searchProduct.slice(0,Number(limit)) 
    }

    if(searchProduct.length < 1) {
        // dönen değeri return ile döndürmezsen hata alırız çünkü 2 adet response dönmüş oluyor
        return res.status(200).json(
            {
                success : true,
                message: 'Search product not found'
            }
        )
    }

    return  res.status(200).json(searchProduct)
}
)
app.listen(3100, () => { console.log("Server is running...") })