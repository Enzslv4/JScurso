// Objeto(como se fosse um dict de python)
const pessoa3 = {
    nome: "Mario",
    sobrenome: "Cesar",
    idade: 26,

    // Método dentro do objeto
    fala() {
        console.log(`Olá ${this.nome}!`); // O "this" aí
    },

    maiorDeIdade () {
        if (this.idade >=18) {
            return true
        } else {
            return false
        }
    }
};

pessoa3.fala();
console.log(`${pessoa3.nome} ${pessoa3.sobrenome} é maior de idade? ${pessoa3.maiorDeIdade()}`)

// Função para a mesma coisa
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}