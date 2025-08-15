let num1 = 1;
let num2 = 2.5;
let num3 = 2.54235346;

console.log(num1.toString() + num2.toString());
console.log(typeof num1);
console.log(num3.toFixed(2)); // Para melhorar visualização de float
console.log(num3.toFixed(0));
console.log(Number.isInteger(num3), Number.isInteger(num1)); // Saber tipo de numero