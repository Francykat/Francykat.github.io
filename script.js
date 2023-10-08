let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar menu una vez se seleccione opción
    document.getElementById("nav").classList = "";
    menuVisible= false;
}

//Función que aplica las animaciones a los skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javaScript");
        habilidades[3].classList.add("laravel");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("flutter");
        habilidades[6].classList.add("adaptable");
        habilidades[7].classList.add("equipo");
        habilidades[8].classList.add("resolucion");
        habilidades[9].classList.add("logico");
        habilidades[10].classList.add("autogestion");
        habilidades[11].classList.add("comunicacion");
    }
}


//Etecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 