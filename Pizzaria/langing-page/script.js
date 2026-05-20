function abrirMenu(){
    const nav = document.getElementById("navegador-vertical");
    const iconeMenu = document.getElementById("menu-mobile");
    
    iconeMenu.style.display = "none";
    nav.classList.add("active");

}

function fecharMenu(){
    
    const nav = document.getElementById("navegador-vertical");
    const iconeMenu = document.getElementById("menu-mobile");

    nav.classList.remove("active");
    iconeMenu.style.display = "flex";

}