// Object.defineProperty -> define propriedades
// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    // Para varias propriedades:
    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            // value: nome,
            // writable: true,
            configurable: true,
            get: function() {
                return nome;
            }, // Getter exibe o valor
            set: function(valor) {
                nome = valor;
            }
        },
        preco: {
            enumerable:true,
            configurable: true,
            get: function() {
                return preco
            },
            set: function(valor) {
                if (typeof valor !== 'number') {
                    throw new TypeError('Por favor, preço só pode ser número.')
                }
                preco = valor;
            }
        }
    })
}

p1 = new Produto('agua', '2', '100')
p1.nome = "Outra coisa"
// p1.preco = 'a'
console.log(p1.nome)
