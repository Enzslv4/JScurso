// Herança

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// Para "extender" os metodos da função Produto:
function Camiseta(nome,preco,cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
}
// Agora, copiando o prototype da funcao produto:
Camiseta.prototype = Object.create(Produto.prototype);
// Porem, dessa forma a funcao constructor desaparece, para isso:
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome,preco,material,estoque) {
    Produto.call(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

const camiseta = new Camiseta('Regata', 10.2, "Vermelha")

console.log(camiseta)