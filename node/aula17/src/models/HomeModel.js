// Geralmente models são clases, por isso começar com maiuscula

const mongoose = require('mongoose');

// Criando o esquema do db
const HomeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String
})

// Criando o model com base nesse esquema: primeiro o parametro nome, depois o esquema
// O terceiro parâmetro 'BASEDADOS' trava o nome exato da coleção no MongoDB
const HomeModel = mongoose.model('Home', HomeSchema, 'BASEDADOS');

module.exports = HomeModel