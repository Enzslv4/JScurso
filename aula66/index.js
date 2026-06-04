// Map

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosEmDobro = numeros.map(valor => `Enzo: ${valor * 2}`)

console.log(numerosEmDobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Enzo', idade: 47}
]

const retornaNomes = pessoas.map(obj => obj.nome)
const nomesVelhos = pessoas.map(obj => obj.idade >= 30)
const somenteIdades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
})

console.log(retornaNomes, nomesVelhos, somenteIdades)