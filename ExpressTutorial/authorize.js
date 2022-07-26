const authorize = (req, res, next) => {
   
    const { user , surname } = req.query

    if(user === 'Peter' || surname === 'Gear'){
        console.log(req.query.user)
        req.user = {name: req.query.user , id: 1  , surname: 'Gear'} 
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
    
}
module.exports = authorize