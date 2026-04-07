// Splice

const nomes = ['Pedro', 'Maria', 'Jose', 'Joao', 'Mario']

// nomes.splice(index, delete, add1, add2, etc)
const removidos = nomes.splice(-1, 1, 'Julia')

console.log(removidos, nomes)