require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_LINK,)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
      connectSrc: ["'self'", 'https://cdn.jsdelivr.net'],
    },
  },
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'frontend')));

app.use(session({
    secret: 'uma_chave_secreta_e_segura_aqui',
    // Adicione a propriedade store usando o MongoStore.create:
    store: MongoStore.create({ mongoUrl: process.env.DB_LINK }), 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em milissegundos
        httpOnly: true
    }
}));
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
