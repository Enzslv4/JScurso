require('dotenv').config({ override: true });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_LINK)
    .then(() => {
        // ESSA LINHA VAI REVELAR O MISTÉRIO:
        console.log("Conectado à base de dados. Nome oficial:", mongoose.connection.name); 
        app.emit('pronto');
    })
    .catch(e => console.log(e))

// Para salvar a seção na memória
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flashMessage = require('connect-flash')

const routes = require('./routes');
const path = require('path')
const myMiddleware = require('./src/middlewares/middleware')

// Para receber o body do POST
app.use(express.urlencoded({ extended:true }))

// Para sempre passar pelo middleware global:
app.use(myMiddleware)

// Puxar conteudos estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Salvar sessão de usuario por, por exemplo, 7 dias
const sessionOptions = session({
    secret: "Segredo!!!",
    store: MongoStore.create({ mongoUrl: process.env.DB_LINK }), // Adicionar o cliente de conexão
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flashMessage())

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