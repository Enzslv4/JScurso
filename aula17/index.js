// Funções

function saudacao(nome) {
    console.log(`Olá ${nome}!`);
}

saudacao('José');

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
}; // Nesse caso precisa do ;

console.log(raiz(9));

// Arrow function
const teste = n => n ** 0.5; // Do caralho
console.log(teste(2).toFixed(2));