// Filter, map, reduce - filtrando array

// Retornar os numeros maiores que 10:
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// function callbackFilter(valor, indice, array) {
//     if (valor > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const numerosFiltrados = numeros.filter();

function callbackFilter(valor) {
    return valor >= 10;
}

// OU:

const novosNumeros = numeros.filter(valor => valor >= 10);
console.log(novosNumeros);

// Retornar pessoas com nome com 5 letras ou mais
// Retornar com mais de 50 anos
// Retornar as que terminam com 'a'
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Enzo', idade: 47}
]

const maioresNomes = pessoas.filter(obj => obj.nome.length >= 5);

const comMaisIdade = pessoas.filter(obj => obj.idade > 50);

const terminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(terminaComA)
console.log(comMaisIdade)
console.log(maioresNomes)