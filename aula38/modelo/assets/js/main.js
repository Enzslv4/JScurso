// Node list

const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// const backgroundColorBody = "rgb(0,250,154)";

// console.log(backgroundColorBody);


for (p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    // console.log(paragrafo);
}