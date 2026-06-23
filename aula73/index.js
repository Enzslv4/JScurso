// Metodos uteis para objs

const produto = { nome:'Caneca', preco:1.8};
// Se eu quisesse bloquear alterações para esse obj:
// Object.freeze(produto);

// Usando spread operator
// const outraCoisa = { ...produto };
// Usando object.assign
const outraCoisa = Object.assign({}, produto);

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);
// Pra obter as keys de um array
console.log(Object.keys(produto));