// Heranças

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já está ligado(a).');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado(a).');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, numero, cor, modelo) {
        super(nome);
        this.numero = numero;
        this.cor = cor;
        this.modelo = modelo
    }
}

// const d1 = new DispositivoEletronico('Geladeira');
const d2 = new Smartphone('Samsung', '71 98888-8888', 'Preto', 'Galaxy S24')

console.log(d2)