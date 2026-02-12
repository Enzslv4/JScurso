// Capturar evento de submit do form
const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');


    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if (!peso && !altura) {
        setResultado("Verifique os dados enviados.", false);
        return;
    };

    if (!peso) {
        setResultado("Peso inválido!", false);
        return;
    };

    if (!altura) {
        setResultado("Altura inválida!", false);
        return;
    };

    const imc = getIMC(peso, altura);
    setResultado(`Seu IMC é: ${imc}`, false);
});

function getNivelIMC (imc) {
    const nivel = ["Abaixo do nível", "Peso Normal", "Sobrepeso", ""];
};

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criaP () {
    const p = document.createElement('p');
    return p;
};

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP(msg);
    p.innerHTML = msg;
    resultado.appendChild(p);
};