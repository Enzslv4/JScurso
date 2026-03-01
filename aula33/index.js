const pessoa = {
    nome: "Enzo",
    sobrenome: "Leal",
    idade: 34,
    endereco: {
        rua: "Rua dos bobos",
        numero: 0
    }
}

// Atribuição via desestruturação
const { nome = '', sobrenome, idade } = pessoa; // o "nome = ''" é um valor para quando não tem valor atribuido para essa chave
// nome: teste - para poder atribuir uma chave a uma variavel

console.log(pessoa);