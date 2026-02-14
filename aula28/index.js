const data = new Date();

// const tresHoras = 60 * 60 * 3 * 1000; conta em milissegundos
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(2020, 3, 22, 8, 0, 0); a, m, d, h, m, s, ms
// const data = new Date("2020-03-22 08:00:00");

console.log("Dia", data.getDate());
console.log("Mes", data.getMonth());
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia da Semana", data.getDay());

console.log(data.toString());