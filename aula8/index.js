const nome = 'Enzo'
const sobrenome = 'Silva'
const peso = 65
const idade = 21
const altura = 1.75
let imc = peso / (altura ** 2)
let anoNascimento = 2023 - idade

console.log(`${nome} nasceu em ${anoNascimento} e tem ${idade} anos de idade`) // crase para template string
console.log(`Sua altura é ${altura} metros, pesa ${peso} Kg e seu IMC é ${imc}`)
