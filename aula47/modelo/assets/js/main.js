const relogio = document.querySelector(".relogio");

const iniciarBotao = document.querySelector(".iniciar");
const pausarBotao = document.querySelector(".pausar");
const zerarBotao = document.querySelector(".zerar");

let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
};

iniciarBotao.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
});

pausarBotao.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerarBotao.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML= "00:00:00";
    segundos = 0;
});

function getTimeFromSeconds (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "GMT"
    });
}