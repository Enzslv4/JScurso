// Validador de CPF

/*
Para Calcular CPF:

                    1° 2° 3° 4° 5° 6° 7° 8° 9° 10° 11° 
multiplicar por:    10 9  8  7  6  5  4  3  2  -   -

soma os resultados:
    primeiro digito:
        11° = 11 - (soma % 11) -> se maior q 9, entao vira 0

refaz calculo, porem com o 10° numero que acabou de achar:

                    1° 2° 3° 4° 5° 6° 7° 8° 9° 10° 11° 
multiplicar por:    10 9  8  7  6  5  4  3  2  1   -

soma os resultados:
    primeiro digito:
        12° = 12 - (soma % 12) -> se maior q 9, entao vira 0

agora concatena

*/

function validarCPF(cpfValidar) {
    this.cpfValidar = cpfValidar;
    let cpfString = String(cpfValidar);

    function iterador(maximoIndice) {
        let soma = 0;
        let operador = 0;
        let multiplicador = maximoIndice + 1; 

        for (let i = 0; i < maximoIndice; i++) {
            operador = parseInt(cpfString[i]) * multiplicador;
            soma += operador;
            multiplicador -= 1;
        }

        return 11 - (soma % 11);
    }

    let primeiroNumero = iterador(9);
    if (primeiroNumero >= 10) { primeiroNumero = 0; }
    primeiroNumero = String(primeiroNumero);

    let segundoNumero = iterador(10);
    if (segundoNumero >= 10) { segundoNumero = 0; }
    segundoNumero = String(segundoNumero)

    const cpfValidado = cpfString.slice(0, -2) + primeiroNumero + segundoNumero

    return cpfValidado === cpfString;
}

const cpf = 66831638040;

console.log(`O CPF ${cpf} é ${validarCPF(cpf) ? 'válido' : 'inválido'}.`);