/*
 Comentario varias linhas
 Dados primitivos(imutaveis) - string, number, bool, undefined, null (bigint, symbol)
 
 Referencia (mutável) - array, object, function
*/

// Apontar para o mesmo resultado/memoria:
let a = [1,2,3];
let b = a;
console.log(a,b);

a.push(4);
console.log(a,b);

a.pop();
console.log(a,b);

// Para copiar as informações sem criar dependencia:
let c = [1,2,3];
let d = [...c];
d.pop();
console.log(c,d);

const aa = {
    nome: "Luiz",
    sobrenome: "Soares"
};

const bb = {...aa};