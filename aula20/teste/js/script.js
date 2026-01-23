function minhaFunc () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // Para fazer algo quando clicado
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert("Formulário Enviado!");
    //     console.log("Enviado.");
    // };

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener("submit", recebeEventoForm);
}

minhaFunc();