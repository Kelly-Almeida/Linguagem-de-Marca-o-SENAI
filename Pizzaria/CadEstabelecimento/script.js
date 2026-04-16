function abrirMenu(){
    nav = document.getElementById("navegador");
    menu = document.getElementById("menu");
    iconeMenu = document.getElementById("menu-mobile");
    iconeFechar = document.getElementById("fechar-mobile");
    

    menu.style.display ="flex";
    iconeMenu.style.display = "none";
    iconeFechar.style.display ="flex";

    nav.style.top = "100%";
    nav.style.right = "0%";   
    nav.style.backgroundColor = "rgba(255, 245, 245, 0.86)";
    nav.style.width = "50%";
    nav.style.padding = "20px";
    nav.style.paddingTop = "10%"
     

}