// Object.defineProperty -> define propriedades

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Se vai ser exibido ou nao quando o obj for chamado
        value: estoque, // Define o valor do que foi estabelecido acima
        writable: false, // Se pode alterar o valor dessa variavel 'estoque'
        configurable: false // Configuravel
    })

    // Se configurable: true:
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: false, // Se vai ser exibido ou nao quando o obj for chamado
    //     value: outraCoisa, // Define o valor do que foi estabelecido acima
    //     writable: true, // Se pode alterar o valor dessa variavel 'estoque'
    //     configurable: true // Configuravel
    // })


    // Para varias propriedades:
    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

p1 = new Produto('agua', '2', '100')

// Com o configurable como false, esse comando nao funciona:
delete p1.estoque;