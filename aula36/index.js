const frutas = ["Pera", "Laranja", "Uva", "Limão"];


// For in -> lê os indices:
for (let i in frutas) {
    console.log(frutas[i]);
};

// Usando o For in com um objeto:
const pessoa = {
    nome: "Enzo",
    idade: 23,
    peso: 68.5,
    sexo: "Feminino"
};

for (i in pessoa) {
    console.log(pessoa[i]);
};