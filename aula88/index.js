// Async e Await

function rand(min=0, max=3) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    // Dentro do promise, quando chamar o resolve, vai executar algo, o reject é quando aconteça um erro
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Tipo de msg nao aceito.');
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Dentro da promise.')
        }, tempo)
    })
}

async function executa() {
    try {
        const fase1 = await(esperaAi("Fase 1", rand()));
        console.log(fase1);

        const fase2 = await(esperaAi("Fase 2", rand()));
        console.log(fase2);

        const fase3 = await(esperaAi("Fase 3", rand()));
        console.log(fase3);

        console.log("Terminado");
    } catch(e) {
        console.log(e)
    }
}

executa();