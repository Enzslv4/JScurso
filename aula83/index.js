// Metodos de Instancia Estaticos:
// Basicamente faz com que eu consiga chamar um metodo sem puxar uma instancia, um obj, isso faz com que esse metodo seja executado para todas as instancias

class ControleRemoto {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo de estatico
    static trocarPilha() {
        console.log('Trocando bateria')
    }
}

const cnt1 = new ControleRemoto('LG')

cnt1.aumentarVolume();
cnt1.aumentarVolume();
cnt1.aumentarVolume();
console.log(cnt1)