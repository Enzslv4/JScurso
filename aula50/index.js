// Argumentos salvos na função, independente da função exigir ou não

function funcao() {
    // console.log(arguments[2]) // com o arguments vc consegue pegar todos os argumentos que foram passados para a func
    let total = 0;

    for (let argument of arguments) {
        total += argument
    }

    console.log(total)
}

funcao(0,1,2,3,4);

function calculadora(operador, acumulador, ...numeros) { // as reticencias antes do argumento serve para tratar todos os valores passados antes dele no indice equivalente serem tratados como um so argumento
    let total = 0;

    for (let numero of numeros) {
        if (operador === '+') total += numero;
        if (operador === '-') total -= numero;
        if (operador === '*') total *= numero;
        if (operador === '/') total /= numero;
    }

    return total;
}

console.log(calculadora('+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9))