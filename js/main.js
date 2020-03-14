AOS.init(); //inicializa las animaciones del scroll

const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
const enlace = document.getElementsByClassName("enlace");
let abierto = false;

function toggleMenu(){
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if (document.querySelector(".enlaces.enlaces2")){
        abierto = true;
    }else{
        abierto = false;
    }
})

window.addEventListener("click", function(e){

    if (abierto == true && screen.width < 670) {
        if (e.target == enlace || e.target !== menuHamburguesa) {
            toggleMenu();
            abierto = false;
        }
    }
})

window.addEventListener("resize", function(){
    if (screen.width > 670) {
        if (abierto) {
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})