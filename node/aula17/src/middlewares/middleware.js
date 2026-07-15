exports.globalMiddleware = (req, res, next) => {
    console.log()
    if(req.body?.username) {
        console.log(`Nome do usuario: ${req.body.username}`)
    }
    console.log()
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}