function f1() {
    setTimeout(() => {
        console.log("f1");
    }, 1000);
}

function f2() {
    setTimeout(() => {
        console.log("f2");
    }, 2000);
}

function f3() {
    setTimeout(() => {
        console.log("f3");
    }, 3000);
}

f1();
f2();
f3();
console.log("Hello world!");