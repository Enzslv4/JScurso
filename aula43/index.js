function fizzBuzz(a) {
    if (typeof a !== "number") return a;
    if (a < 0 || a > 100) return a;

    const calc1 = a % 3 === 0;
    const calc2 = a % 5 === 0;

    if (calc1 && calc2) {
        return "FizzBuzz";
    } else if (calc1) {
        return "Fizz";
    } else if (calc2) {
        return "Buzz";
    } else {
        return a;
    }
}

for (let i = 0; i <=100; i++) {
    console.log(`Seu número atual: ${i}\nResultado da operação: ${fizzBuzz(i)}\n`)
};