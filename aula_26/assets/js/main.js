// Capturar evento de submit do form
const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Evento Previnido.");
    setResultado("teste");
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')
    p.innerHTML = msg;

    resultado.appendChild(p);
};