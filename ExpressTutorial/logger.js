const logger = (req, res, next) => {
    const date = new Date().toLocaleDateString()
    const method = req.method
    const url = req.url
    console.log(method, url, date)
    next()
}

module.exports = logger