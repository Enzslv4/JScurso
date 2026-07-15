require('dotenv').config({ override: true });
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session'); // 1. Importado

mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log("Conectado à base de dados."); 
        app.emit('pronto');
    })
    .catch(e => console.log(e))

const routes = require('./routes');
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

// Para usar o helmet
app.use(helmet())

// Para receber o body do POST
app.use(express.urlencoded({ extended:true }))

// Puxar conteudos estaticos
app.use(express.static(path.resolve(__dirname, 'frontend')))
app.use(express.static(path.resolve(__dirname, 'public')));

// Setando views html para serem usadas
app.set('views', path.resolve(__dirname, 'src', 'views'))

// Setando engine para views:
app.set('view engine', 'ejs')

// 2. ATIVAR A SESSÃO AQUI (Obrigatório para o CSRF funcionar)
app.use(session({
    secret: 'chave_secreta_para_proteger_os_dados',
    resave: false,
    saveUninitialized: false
}));

// 3. INICIALIZAR O PACOTE CSURF
app.use(csrf())

// 4. ATIVAR OS MIDDLEWARES GLOBAIS (Preparam os dados ANTES das rotas rodarem)
app.use(csrfMiddleware); // Aqui ele cria a variável para o EJS usar
app.use(globalMiddleware);

// 5. USAR AS ROTAS (Agora elas têm acesso a tudo o que foi configurado acima)
app.use(routes)

// 6. TRATAMENTO DE ERROS (Sempre fica depois de "app.use(routes)")
app.use(checkCsrfError)

// Atribuindo porta para rodar o servidor
app.listen(3000, () => {
    console.log("Executando servidor teste na porta 3000")
})
