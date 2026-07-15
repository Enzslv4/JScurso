require('dotenv').config({ override: true });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log("Conectado à base de dados. Nome oficial:", mongoose.connection.name); 
        app.emit('pronto');
    })
    .catch(e => console.log(e))
const routes = require('./routes');
const path = require('path')
const myMiddleware = require('./src/middlewares/middleware')

// Para receber o body do POST
app.use(express.urlencoded({ extended:true }))

// Para sempre passar pelo middleware global:
app.use(myMiddleware)

// Puxar conteudos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Setando views html para serem usadas
app.set('views', path.resolve(__dirname, 'src', 'views'))

// Setando engine para views:
app.set('view engine', 'ejs')

// Para usar as rotas
app.use(routes)


// Atribuindo porta para rodar o servidor
app.listen(3000, () => {
    console.log("Executando servidor teste na porta 3000")
})