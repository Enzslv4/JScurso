// Factory Functions

function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) { // O Método
            return `${this.nome} está ${assunto}.`; 
        },
        altura,
        peso,
        imc() { // Outro método
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criarPessoa('Enzo', 'Leal', 1.76, 68);
console.log(p1.imc());

const p2 = criarPessoa('Jorge', 'Jesus', 1.7, 57);
console.log(p2.imc());