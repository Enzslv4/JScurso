const elementos = [
    {tag: 'p', texto: 'Frase 1: A frase 3 é uma mentira.'},
    {tag: 'div', texto: 'Frase 2: A frase 4 é uma mentira.'},
    {tag: 'footer', texto: 'Frase 3: A frase 2 é uma mentira.'},
    {tag: 'section', texto: 'Frase 4: A frase 1 é uma verdade.'},
];

// Capturar evento de submit do form
const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let t = document.createElement(tag);
    t.innerHTML = texto;
    div.appendChild(t);
}


container.appendChild(div);