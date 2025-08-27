const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; // Trocar o texto do elemento numeroTitulo
texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}.</p>`;