const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

// Para receber o body do POST
app.use(express.urlencoded({ extended:true }))

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