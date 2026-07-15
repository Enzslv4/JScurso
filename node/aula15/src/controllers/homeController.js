const HomeModel = require('../models/HomeModel')

HomeModel.create({
    title: 'Esse é meu título',
    description: 'A descrição do titulo'
}).then(data => console.log(data))

exports.homePage = (req, res) => {
    res.render('index')
}

exports.treatPost = (req, res) => {
    res.send(req.body)
}