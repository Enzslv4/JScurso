const alunos = ["Luiz", "Maria", "João"];

console.log(alunos[0]);

alunos[0] = 'Enzo';
console.log(alunos[0]);

console.log(alunos);
alunos[3] = "José";

console.log(alunos);

alunos.push("Marisa"); // Adiciona ao final de um array/lista
// alternativamente: alunos[alunos.lengh] = "texto"
console.log(alunos);

alunos.unshift("Mario"); // Adiciona ao inicio do array
console.log(alunos);

alunos.pop(); // Remove ultimo elemento
// Para armazenar somente elemento removido
const removido = alunos.pop();

// Remover do inicio
alunos.shift();
console.log(alunos);

// Para remover um elemento sem alterar os outros indices
delete alunos[2];
console.log(alunos);
// Porem agora existe um elemento vazio

alunos.push("Marisa");
alunos.push("Joseph");
alunos.push("Pedro");
alunos.push("Paulo");
console.log(alunos);
console.log(alunos.slice(0, 2));

// Para separar ate um determinado indice, como por exemplo o penultimo
console.log(alunos.slice(0, -1));

console.log(typeof alunos); // Objeto
// Para saber se é um array
console.log(alunos instanceof Array); // True ou False