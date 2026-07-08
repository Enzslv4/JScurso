const path = require('path');
const caminhoArquivoJson = path.resolve(__dirname, '..', 'teste.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
    {nome: "Jorge"},
    {nome: "Maria"},
    {nome: "João"},
    {nome: "Pedro"},
    {nome: "Valentina"}
]
// Converta para json primeiro:
const json = JSON.stringify(pessoas, '', 2)

escreve(caminhoArquivoJson, json)
ler(caminhoArquivoJson)