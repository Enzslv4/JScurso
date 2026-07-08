const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true }))

// Para dar um get, primeiro a rota, depois pode ser usada uma função
app.get('/', (req, resp) => {
    resp.send('Ola querido')
})

app.get('/contato', (req, resp) => {
    resp.send('Hackeram meu site, segue lá no twiiiiterrr')
})

// Para direcionar para uma pagina usando um parametro, o '{}' é para tornar o parametro opcional
app.get('/teste/{:idUsuario}', (req, resp) => {
    console.log(req.params)
    console.log(req.query)
    // resp.send('Fala meu consagrado ' + req.params.idUsuario + '!')
    resp.send('Fala meu consagrado ' + req.query.nomeCompleto + '!')
})

// Atribuindo porta para rodar o servidor
app.listen(3000, () => {
    console.log("Executando servidor teste na porta 3000")
})