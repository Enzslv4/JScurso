const form = document.querySelector("#todocampo");
const inputTarefa = document.querySelector("#nometarefa");
const listaTarefas = document.querySelector("#todolista");

// 1. Escutador do Formulário (Trata clique no botão e tecla Enter)
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputTarefa.value) return; // Evita tarefa vazia
    
    criarTarefa(inputTarefa.value);
    limparInput();
});

// 2. Função principal para criar a tarefa na tela
function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput; // Define o texto primeiro
    listaTarefas.appendChild(li); // Adiciona na lista
    criaBotaoApagar(li); // Adiciona o botão dentro do li
    salvarTarefas();
}

// 3. Cria o elemento LI
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// 4. Cria e adiciona o botão de apagar ao LI
function criaBotaoApagar(li) {
    li.innerText += ' '; // Espaço entre texto e botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

// 5. Escutador de cliques para apagar a tarefa (Delegação de Eventos)
document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

// 6. Auxiliar para limpar o campo
function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// 7. Salvar no LocalStorage
function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    };
}