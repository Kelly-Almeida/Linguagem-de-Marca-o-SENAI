function abrirMenu(){
    nav = document.getElementById("navegador-vertical");
    navMobile = document.getElementsByClassName("nav-vertical");
    menu = document.getElementById("menu-vertical");
    iconeMenu = document.getElementById("menu-mobile");
    iconeFechar = document.getElementById("fechar-mobile");
    iconesNav = document.getElementsByClassName("itemMenuVertical");
    
    menu.style.display ="flex";
    menu.style.backgroundColor = "rgba(255, 245, 245, 0.66)";
    menu.style.flexDirection = "column";
    iconeMenu.style.display = "none";
    iconeFechar.style.display = "flex";
    iconesNav.style.display = "flex";
    
    

    nav.style.transition = "1s";
    nav.style.top = "100%";
    nav.style.right = "-2%";   
    nav.style.width = "20%";
    nav.style.padding = "20px";
    nav.style.paddingTop = "10%";     

}

function fecharMenu(){
    
    iconeMenu.style.display = "flex";
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "0.4s";
    menu.style.display = "none";

}