const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// fs.writeFile(caminhoArquivo, 'Frase teste 1', { flag: 'w', encoding: 'utf8' }, (err) => {
//   if (err) {
//     console.error('Erro ao escrever o arquivo:', err);
//   } else {
//     console.log('Arquivo criado/escrito com sucesso!');
//   }
// });

// // Sobre as flags: w: apaga e reescreve, a: append

// // Para criar json
// const caminhoArquivoJson = path.resolve(__dirname, '..', 'teste.json');
// const pessoas = [
//     {nome: "Enzo"},
//     {nome: "Maria"},
//     {nome: "João"},
//     {nome: "Pedro"},
//     {nome: "Valentina"}
// ]
// // Converta para json primeiro:
// const json = JSON.stringify(pessoas, '', 2)

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }, (err) => {
    if (err) {
        console.error('Erro ao escrever o arquivo:', err);
    } else {
        console.log('Arquivo criado/escrito com sucesso!');
    }
    });
}

