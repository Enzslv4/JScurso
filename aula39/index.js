// While e Do While

let controle = 0;

// while (controle <= 10) {
//     console.log(controle);
//     controle++;
// }

function random(min, max) {
    const r = Math.random()  * (max - min) + min;
    return Math.floor(r);
}; 

// while (controle <= 5) {
//     console.log(random(1, 100));
//     controle++
// }

// function roletaRussa (min, max) {
//     let bullet = random(min, max);
//     let tentativas = 0;
//     while (bullet !== 1) {
//         bullet = random(min, max);
//         console.log(bullet);
//         tentativas++
//     }

//     console.log(`BOOM! MORREU!! Número de giradas: ${tentativas} tentativas.`)
// }

// roletaRussa(1, 6);

let rand = random(0, 20);

// do {
//     let rand = random(0, 20);
//     console.log(rand)
// } while (rand !== 10);