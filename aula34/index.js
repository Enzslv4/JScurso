for (let i = 0; i <= 5; i ++) {
    console.log(`Line ${i}`);
}

console.log("");

for (let i = 100; i <= 200; i += 10) {
    console.log("Test 2: ", i);
}

console.log("");

for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(i, par);
}