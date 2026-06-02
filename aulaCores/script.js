const slide = document.querySelector(".itensCarrossel");
const produtos = document.querySelector(".produtos li");
const btnEsq = document.querySelector("#esquerda");
const btnDir = document.querySelector("#direita");

let index = 0;

function mostrarProduto(){
    produtos.computedStyleMap.transform = `translateX(${-index * 100})`;
}

btnDir.addEventListener('click', ()=>{
    index = (index + 1) % imagens.length;
    mostrarProduto();
});
btnEsq.addEventListener('click', ()=>{
    index = (index + 1) % imagens.length;
    mostrarProduto();
});
