const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

// Rotas home
route.get('/', homeController.homePage)
route.post('/', homeController.treatPost)

// Rotas contato
route.get('/contact', contactController.contactPage)

module.exports = route;