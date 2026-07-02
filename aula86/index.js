// Promises

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
            console.log(msg)
            resolve(msg)
        }, tempo)
    })
}

// O 'then' no final da função vai executar algo após essa função acabar, e o 'catch' é para capturar erros
esperaAi("Frase 1", rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(123, rand(1,3))
    })
    .then(resposta => {
        console.log('Serei o ultimo');
    })
    .catch(e => {
        console.log('ERRO:', e)
    })