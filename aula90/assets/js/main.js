document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault(); // Primeira linha para garantir o bloqueio do clique
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    // CORRIGIDO: Uso de dois pontos (:) em vez de igual (=)
    request({
        method: 'GET', 
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    });
}

// CORRIGIDO: Adicionado o parâmetro 'response' na função
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    if (resultado) {
        resultado.innerHTML = response;
    }
}

fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('F NO CHAT')
    })
    .catch(e => console.log(e))