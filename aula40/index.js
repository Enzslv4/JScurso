// Break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        continue;
    }

    console.log(numero);
}

console.log("\n");
console.log("#######");
console.log("\n");

for (let numero of numeros) {

    if (numero === 4) {
        break
    }

    console.log(numero);
}