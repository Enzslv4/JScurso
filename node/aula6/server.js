const express = require('express');
const app = express();

// Para dar um get, primeiro a rota, depois pode ser usada uma função
app.get('/', (req, resp) => {
    resp.send('Ola querido')
})

app.get('/contato', (req, resp) => {
    resp.send('Hackeram meu site, segue lá no twiiiiterrr')
})

// Atribuindo porta para rodar o servidor
app.listen(3000, () => {
    console.log("Executando servidor teste na porta 3000")
})