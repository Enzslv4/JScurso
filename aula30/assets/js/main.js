// Capturar evento de submit do form
const form = document.querySelector(".container form");
const data = new Date();

form.innerHTML = data

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const p = document.createElement('p');
    p.innerHTML = data;

    document.body.appendChild(p);
});

console.log(data);