// Funções Geradoras

function* geradora1() {
    // Blablabla
    yield "Valor 1"
    // blablabla
    yield 'Valor 2'
    // blablabla
    yield 'Valor 3'
}

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next().value);

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}