// Concatenação de Arrays

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1 + a2; // Junta tudo em uma string, não serve para criar uma nova lista com elementos das 2 anteriores

const a4 = a1.concat(a2); // Essa sim junta as duas

// console.log(a3);
// console.log(a4);

// Tambem pode dessa forma:

const a5 = a4.concat("Jorge", [1,2,3], "Pedro")

// console.log(a5)

// const test = [1,2,3]

// const test2 = [4,"Alma","Pedro"]

// const test3 = test.concat(test2, "Fim do teste")
// console.log(test3)

// ...rest -> ...spread:

const a6 = [...a1, "teste", ...a5, [12,13,14], ...[23,24,25]]

console.log(a6)