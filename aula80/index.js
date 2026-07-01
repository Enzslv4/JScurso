class Pessoa {
    // Para passar parametros:
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} gosta de falar.`)
    }

    comer() {
        console.log(`${this.nome} gosta de comer.`)
    }

    beber() {
        console.log(`${this.nome} gosta de beber.`)
    }
}

const p1 = new Pessoa('Eduardo', 'Monica')
const p2 = new Pessoa('Monica', 'Eduardo')

p1.falar();
p2.falar();