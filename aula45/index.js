// Try, catch e finally

// try {
//     console.log("Abrir arquivo");
// } catch (e) {
//     console.log("Tratar erro");
// } finally {
//     console.log("Fechar arquivo");
// }

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância Date.")
    };

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const hora = retornaHora(11);
console.log(hora);