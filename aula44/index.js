// Try, catch e throw

// try {
//     console.log(jogo);
// } catch (e) {
//     console.log("Deu erro parceiro!");
//     console.log(e);
// }

function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw("São precisos 2 números.");
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma("1", 2))
} catch (erro) {
    console.log(erro);
}