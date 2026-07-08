const fs = require('fs').promises
const { read } = require('fs');
const path = require('path');
const { constrainedMemory } = require('process');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files);
}

async function walk(files) {
    for(let file of files) {
        console.log(file)
    }
}

readdir('./c/Users/ossil/OneDrive/Documentos/Estudos/Cursos/Programação/JavaScript/')