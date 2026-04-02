// Funções construtoras

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log('Teste de metodo da classe.')
    }
}

const p1 = new Pessoa("Enzo", "Silva");
const p2 = new Pessoa("Jose", "Cadura")

console.log(p1.nome)
p1.metodo();