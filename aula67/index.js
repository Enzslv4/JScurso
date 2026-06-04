// Reduce

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numeros.reduce(function(acumulador, valor, indice) {
    acumulador += valor;
    // console.log(acumulador);
    return acumulador;
}, 0);

console.log(total)

const pares = numeros.reduce(function(acumulador, valor, indice) {
    if (valor % 2 === 0) acumulador.push(valor);
    // console.log(acumulador);
    return acumulador;
}, []);

console.log(pares)