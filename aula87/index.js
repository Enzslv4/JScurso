// Metodos para ajudar no uso de Promises
// Promise.all Promise.race Promise.resolve Promise.reject

function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    // Dentro do promise, quando chamar o resolve, vai executar algo, o reject é quando aconteça um erro
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Tipo de msg nao aceito.')

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Dentro da promise.')
        }, tempo)
    })
}

// Primeiro é criado um array com os valores dos promises desejados
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Ultimo valor'
]

// Executa todas em ordem
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// Executa somente a primeira que fica pronta
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

    