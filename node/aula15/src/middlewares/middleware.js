module.exports = (req, res, next) => {
    console.log()
    if(req.body?.username) {
        console.log(`Nome do usuario: ${req.body.username}`)
    }
    console.log()
    next();
}

