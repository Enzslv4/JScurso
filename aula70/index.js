// // Inicio Seção 6: Objetos e Prototypes

// const pessoa = {
//     nome: "Enzo",
//     sobrenome: 'Silva'
// }

// console.log(pessoa.nome);
// // Ou:
// console.log(pessoa['nome'])

// // Se por acaso a chave for dinamica, se torna interessante usar os colchetes
// const chave = 'nome'
// console.log(pessoa[chave])

// // Usando contrutor de objeto
// const pessoa2 = new Object()
// pessoa2.nome = 'Ana'
// pessoa2.idade = 22

// console.log(pessoa2.nome)

// pessoa2.falarNome = function() {
//     console.log(`${this.nome} está falando agora.`)
// }

// pessoa2.falarNome()

// pessoa2.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// console.log(pessoa2.getDataNascimento())

// for (let chave in pessoa2) {
//     console.log(chave);
// }


// Factory function
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        // Object.freeze(this), Isso teoricamente travaria alteração de objetos
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }, // Isso se caso nao queira executar, para executar, tirar get
    }
}

// Constructor function
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome; // Com o 'this', toda vez é criado um obj vazio: {}
    this.sobrenome = sobrenome

    this.nomeCompleto = function nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

pessoa1 = new Pessoa('Enzo', 'Silva Leal')
p2 = new Pessoa('Jose', 'Cadura')
console.log(pessoa1.nomeCompleto())
console.log(p2.nomeCompleto())