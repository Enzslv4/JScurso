// Escopo lexico

const nome = "Enzo";

function meuNome() {
    console.log(nome);
}

function digaMeuNome() {
    const nome = "Leal";
    meuNome();
}

digaMeuNome();