const fs = require('fs')

module.exports = (caminho) => {
    fs.readFile(caminho, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo:', data);
    });
}