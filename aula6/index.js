/* Algumas regras:
Não podemos criar vars com palavras reservadas
Vars precisam ter nomes significativos
Não pode começar o nome da var com numero
Não pode ter espaços ou hifens
Utilizamos camelCase = primeira com letra minusculas e a outra com maiuscula
Case-sensitive = variaveis com mesmo nome, mas com formatações diferentes vao ser consideradas como
    vars diferentes
NAO UTILIZAR VAR, E SIM LET
*/
let nomeCliente = 'Enzo'
let nomecliente = 'Joao'
console.log(nomeCliente, nomecliente)

let nome; // Declara a variavel, mas não a define
nome = 'Fulano' // Inicializa a variavel

//let nome = 'Fulano'; // 'nome' é um rótulo
// var tambem se usa no lugar do let

console.log(nome, 'é otario');
console.log(nome, 'quer agua de coco');
console.log(nome, 'perde tempo');
console.log(nome, 'é', nome, 'ciclano é ciclano');