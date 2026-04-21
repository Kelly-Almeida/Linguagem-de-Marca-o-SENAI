function abrirMenu(){
    nav = document.getElementById("navegador");
    menu = document.getElementById("menu");
    iconeMenu = document.getElementById("menu-mobile");
    iconeFechar = document.getElementById("fechar-mobile");
    
    menu.style.display ="flex";
    iconeMenu.style.display = "none";
    iconeFechar.style.display = "flex";

    nav.style.transition = "1s";
    nav.style.top = "100%";
    nav.style.right = "-2%";   
    nav.style.backgroundColor = "rgba(255, 245, 245, 0.86)";
    nav.style.width = "20%";
    nav.style.padding = "20px";
    nav.style.paddingTop = "10%"
     

}

function fecharMenu(){
    
    nav.style.top = "-25%";
    iconeMenu.style.display = "flex";
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "0.4s";
    menu.style.display = "none";

    

}