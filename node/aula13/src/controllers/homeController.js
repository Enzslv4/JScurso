const HomeModel = require('../models/HomeModel')

// HomeModel.create{
//     title: 'Esse é meu título',
//     description: 'A descrição do titulo'
// }).then(data => console.log(data))

exports.homePage = (req, res) => {
    // Para salvar uma seção:
    // req.session.user = {username: 'Enzo', logged: true}

    // Para mensagens que serão carregadas toda vez que for acessado, porem esquecida depois, use flash
    // req.flashMessage('info', 'Oi tudo bem?')
    // console.log(req.flashMessage('error'), req.flashMessage('success'), req.flashMessage('info'))

    res.render('index')
}

exports.treatPost = (req, res) => {
    res.send(req.body)
}