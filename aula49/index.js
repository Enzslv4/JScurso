// Declaração de Função (Function Hoisting)

teste();

function teste() {
    console.log("Teste");
}

// First-class objects (Objetos de Primeira Classe)
// Function Expression
const souUmDado = function () {
    console.log("Sou um dado")
};

souUmDado();

function executaFuncao (funcao) {
    console.log("Oi dado");
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log("Arrow func");
}

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log("func dentro de obj")
    }
}

obj.falar();