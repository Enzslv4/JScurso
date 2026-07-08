const multiplicacao = require('./mod')

console.log(multiplicacao(2,2))

console.log(__filename); // Arquivo atual
console.log(__dirname); // Pasta atual

const path = require('path')
console.log(path.resolve(__dirname, '..', '..')) // Manipulação melhor das pastas: com a sequencia de strings vc consegue mudar de pasta