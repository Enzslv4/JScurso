const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     title: 'Esse é meu título',
//     description: 'A descrição do titulo'
// }).then(data => console.log(data))

exports.homePage = (req, res) => {
    res.render('index', {
        title: "Olá Enzo!",
        description: "Agora tu vai ficar calado",
        numbers: [1,2,3,4,5,6,7,8,9]
    })
}

// No ejs: <%= para não escapar tags, e <%- para escapar tags html

exports.treatPost = (req, res) => {
    res.send(req.body)
}