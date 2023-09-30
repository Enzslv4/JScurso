// let stringa = 'um \'texto\'' // forma de escapar o caracter com \ antes
let stringa = 'um texto'
let stringa2 = 'égua'
console.log(stringa[3]) // indices em js
console.log(stringa.charAt(8)) // para exemplificar q não dá erro se passar do num max de caracteres
console.log(stringa.concat(stringa2)) // concatena textos

// para saber em qual indice a a palavra começa
console.log(stringa.indexOf('x'))
// para buscar dentro de uma string a partir de uma letra desejada
console.log(stringa.indexOf('t', 2))

// flag index
console.log(stringa.match(/a-c/))