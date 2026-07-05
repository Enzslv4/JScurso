const div = document.querySelector('.container')

function criarElementos() {
    const table = document.createElement('table');

    // Texto de caracteres
    const tr1 = document.createElement('tr');
    const td1 = document.createElement('p');
    td1.innerText = 'Quantidade de caracteres';
    tr1.appendChild(td1);
    
    // Mudamos para input type="number" porque faz mais sentido para senhas
    const td2 = document.createElement('input');
    td2.type = 'number';
    td2.className = 'input-qtd'; // Classe para acharmos ele facilmente depois
    
    // CARREGA E SALVA O LOCALSTORAGE AQUI (Evita o erro de escopo)
    td2.value = localStorage.getItem('quantidade_caracteres') || '';
    td2.addEventListener('input', () => {
        localStorage.setItem('quantidade_caracteres', td2.value);
    });
    
    tr1.appendChild(td2);
    table.appendChild(tr1);

    // Adicionar numeros
    const tr2 = document.createElement('tr');
    const td3 = document.createElement('p');
    td3.innerText = 'Adicionar números';
    tr2.appendChild(td3);
    const td4 = document.createElement('input');
    td4.type = 'checkbox';
    td4.className = 'chk-num';
    tr2.appendChild(td4);
    table.appendChild(tr2);

    // Letras Maiusculas
    const tr3 = document.createElement('tr');
    const td5 = document.createElement('p');
    td5.innerText = 'Letras Maiúsculas';
    tr3.appendChild(td5);
    const td6 = document.createElement('input');
    td6.type = 'checkbox';
    td6.className = 'chk-upper';
    tr3.appendChild(td6);
    table.appendChild(tr3);

    // Letras Minusculas
    const tr4 = document.createElement('tr');
    const td7 = document.createElement('p');
    td7.innerText = 'Letras Minúsculas';
    tr4.appendChild(td7);
    const td8 = document.createElement('input');
    td8.type = 'checkbox';
    td8.className = 'chk-lower';
    tr4.appendChild(td8);
    table.appendChild(tr4);

    // Simbolos
    const tr5 = document.createElement('tr');
    const td9 = document.createElement('p');
    td9.innerText = 'Símbolos';
    tr5.appendChild(td9);
    const td10 = document.createElement('input');
    td10.type = 'checkbox';
    td10.className = 'chk-simbolos';
    tr5.appendChild(td10);
    table.appendChild(tr5);

    // Botao Gerar Senha
    const generateBttn = document.createElement('button');
    generateBttn.innerText = 'Gerar Senha';
    table.appendChild(generateBttn);

    div.appendChild(table);
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'button') {
        e.preventDefault();

        // Buscamos os elementos direto do HTML atualizado
        const inputQtd = document.querySelector('.input-qtd');
        const qtdValor = Number(inputQtd.value);

        // Validação se é um número válido e maior que zero
        if (isNaN(qtdValor) || qtdValor <= 0) {
            alert('É preciso preencher o campo com um número maior que zero.');
            inputQtd.value = '';
            localStorage.removeItem('quantidade_caracteres');
            return; // Para a execução aqui se estiver errado
        }

        // Captura o estado real dos checkboxes na hora do clique
        const hasNumbers = document.querySelector('.chk-num').checked;
        const hasUpper = document.querySelector('.chk-upper').checked;
        const hasLower = document.querySelector('.chk-lower').checked;
        const simbols = document.querySelector('.chk-simbolos').checked;

        // Limpa o h2 antigo se já existir para não acumular testes na tela
        const antigoH2 = div.querySelector('h2');
        if(antigoH2) antigoH2.remove();

        const passwGenerated = document.createElement('h2');
        passwGenerated.innerHTML = generatePassw(qtdValor, hasNumbers, hasUpper, hasLower, simbols);
        div.appendChild(passwGenerated);
    }
});

function generatePassw(charLength, hasNumbers, hasUpper, hasLower, simbols) {
    if(!(hasNumbers || hasUpper || hasLower || simbols)) {
        alert('Nenhuma opção selecionada!')
        return false
    }

    let randomChars = '';

    if(hasNumbers) {
        randomChars = randomChars + '1234567890'
    }

    if(hasUpper) {
       randomChars = randomChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    }

    if(hasLower) {
       randomChars = randomChars + 'abcdefghijklmnopqrstuvwxyz' 
    }

    if(simbols) {
       randomChars = randomChars + '!@#$%^&*()_+{}|:"<>?-=[];\',./\\'
    }

    let newPassw = ''

    if(charLength > 0) {
        for(let i = 0; i < charLength; i++) {
            let currentNumber = Math.floor(Math.random() * randomChars.length);

            newPassw = newPassw + randomChars[currentNumber]
        }
    }

    return newPassw;
}


criarElementos();