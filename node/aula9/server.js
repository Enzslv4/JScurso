const express = require('express');
const app = express();
const routes = require('./routes')

// Para receber o body do POST
app.use(express.urlencoded({ extended:true }))
// Para usar as rotas
app.use(routes)

// Rotas:


// Atribuindo porta para rodar o servidor
app.listen(3000, () => {
    console.log("Executando servidor teste na porta 3000")
})