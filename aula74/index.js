// Prototypes -> Object.prototype

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveA: 'B'
}

// Para acessar chave de outro obj
Object.setPrototypeOf(objB, objA);

function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.desconto = percentual
    if (percentual <= 100){
        this.preco = this.preco - (this.preco * (percentual / 100));
    } else {
        console.log('Desconto maior que 100%')
    }
}

Produto.prototype.aumento = function(percentual) {
    this.aumento = percentual
    if (percentual >= 0){
        this.preco = this.preco + (this.preco * (percentual / 100));
    } else {
        console.log('Aumento menor que 0%')
    }
}

const produto1 = new Produto('Leite 1L', 20.12);

// produto1.desconto(10);
produto1.aumento(10);

console.log(produto1.preco)