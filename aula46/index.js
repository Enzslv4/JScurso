// setInterval e setTimeout

function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function doIntervalo () {
    console.log(mostrarHora())
}

// setInterval(doIntervalo, 1000); // executa uma função a cada determinado tempo, em ms

const temporizador = setInterval(function () {
    console.log(mostrarHora());
}, 1000); // Faz o mesmo, porem usando uma função anonima

setTimeout(function () {
    clearInterval(temporizador); // Pegando a função temporizador definida antes, consigo definir um tempo para que ela seja parada de executar, nesse caso 10s
}, 10000);

// O clearInterval serve para paralizar um setInterval