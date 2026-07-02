const request = obj => {
    const xhr = new XMLHttpRequest();
    // Força o método para maiúsculas (ex: 'GET')
    xhr.open(obj.method.toUpperCase(), obj.url, true); 
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

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
