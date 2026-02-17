const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // rest operator
const[um, , dois, , tres] = numeros; // esse é massa

console.log(um, dois, tres);
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

const outrosnums = [[1,2,3],[4,5,6],[7,8,9]];
const [,,[sete]] = outrosnums; // incrivel

console.log(sete);