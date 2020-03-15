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



// Guardamos la posicion 0 del eje Y de la página al cargar
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    // Al hacer scroll, registramos donde está el eje Y
    let desplazamientoActual = window.pageYOffset;
    
    // Si la posición actual es inferior a la registrada previamente
    // significa que estamos subiendo.
    if(ubicacionPrincipal >= desplazamientoActual){
        //Mostramos el NAV
        this.document.getElementsByTagName("header")[0].style.top = "0px"
    // Si la posición actual es mayor que la registrada previamente
    // significa que estamos bajando.
    }else{
        // Ocultamos el NAV
        this.document.getElementsByTagName("header")[0].style.top = "-100px"
    }
    // Actualizamos la posición Y para compararla con la que haya 
    //después de volver a hacer scroll.
    ubicacionPrincipal = desplazamientoActual;
})