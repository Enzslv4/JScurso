let num = 9;
let num1 = 9.212344;
let num2 = Math.floor(num1); // arredondar para baixo
let num3 = Math.ceil(num1); // arredondar para cima
let num4 = Math.round(num1); // arredondar dinamicamente

console.log(`Original: ${num1}`);
console.log(`Arredondar para baixo: ${num2}`);
console.log(`Arredondar para cima: ${num3}`);
console.log(`Arredondar dinamicamente: ${num4}`);

lista = [1,2,3,4,5,6,-10]
console.log(Math.max(1,2,3,4,5,6,-10)); // maior numero
console.log(Math.min(1,2,3,4,5,6,-10)); // menor numero

const aleatorio1 = Math.random(); // Gera numero aleatorio entre 0 e 1, 1 n incluso
const aleatorio2 = Math.random() * (10 - 5) + 5; // Aleatorio entre 10 e 5
console.log(aleatorio1, aleatorio2);

console.log(Math.PI); // 3.14

console.log(Math.pow(2,10)); // Potenciação: 2^10 nesse caso

console.log(2 ** 10); // Msm coisa so q mais facil

console.log(num ** (1/2)); // Forma de fazer raiz

console.log(100 / 0); // Tomar cuidado, retorna verdadeiro e Infinity
console.log(!!(100 / 0)); // Use !! para avaliar se algo é verdadeiro ou n