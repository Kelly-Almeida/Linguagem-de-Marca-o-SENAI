function abrirMenu(){
    nav = document.getElementById("navegador");
    menu = document.getElementById("menu");
    iconeMenu = document.getElementById("menu-mobile");
    

    menu.style.display ="flex";
    iconeMenu.style.display = "none";

    nav.style.top = "100%";
    nav.style.right = "0%";   
    nav.style.backgroundColor = "rgba(255, 255, 255)";
    nav.style.width = "50%";
    nav.style.padding = "20px";
    

}