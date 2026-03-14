function ePaisagem (l, a) {
    return l > a ? "Paisagem" : "Retrato";
}

let imagem = [1920, 1080]

console.log(`Sua Imagem ${imagem[0]}x${imagem[1]} está no modo: ${ePaisagem(imagem[0], imagem[1])}.`);