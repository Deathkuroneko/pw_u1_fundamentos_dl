function ocultarImagen() {

    const img = document.getElementById("img_id");
    const boton = document.getElementById("boton_img");

    if (img.style.display !== "none") {
        img.style.display = "none";
        boton.innerHTML = "<button>Mostrar Imagen</button>";
    } else {
        img.style.display = "block";
        boton.innerHTML = "<button>Ocultar Imagen</button>";
    }

}

function ocultarTabla1() {

    const tabla1 = document.getElementById("tabla1");
    const boton = document.getElementById("boton_tb1");

    if (tabla1.style.display !== "none") {
        tabla1.style.display = "none";
        boton.innerHTML = "<button>Mostrar tabla1</button>";
    } else {
        tabla1.style.display = "table";
        boton.innerHTML = "<button>Ocultar tabla1</button>";
    }

}

function ocultarTabla2() {

    const tablab2 = document.getElementById("tabla2");

    tablab2.style.display = (tablab2.style.display === "none") ? "none" : "block";

    tablab2.style.display = (tablab2.style.display === "none") ? "block" : "none";


    /* if (tablab2.style.display == "none") {
         tablab2.style.display = "table";
     } else {
         tablab2.style.display = "none";
     }*/

}

function inputVacio() {

    const inputs = [document.getElementById("id_name").value
        , document.getElementById("id_ape").value, document.getElementById("id_edad").value, document.getElementById("id_date").value];

    if (inputs[0] === "") {
        let mensaje = document.getElementById('id_vacio');
        let asterisco = document.getElementById('asterisco');
        mensajeAlerta('El campo nombre no puede estar vacio', mensaje);
        mostrarDonde("*", asterisco);
    }

    if (inputs[1] === "") {
        let mensaje = document.getElementById('id_vacio1');
        let asterisco = document.getElementById('asterisco1');
        mensajeAlerta('El campo apellido no puede estar vacio', mensaje);
        mostrarDonde("*", asterisco);
    }
    if (inputs[2] === "") {
        let mensaje = document.getElementById('id_vacio2');
        let asterisco = document.getElementById('asterisco2');
        mensajeAlerta('El campo edad no puede estar vacio', mensaje);
        mostrarDonde("?", asterisco);

    }
    if (inputs[3] === "") {
        let mensaje = document.getElementById('id_vacio3');
        let asterisco = document.getElementById('asterisco3');
        mensajeAlerta('El campo fecha no puede estar vacio');
        mostrarDonde("?")
    }   
}

function mensajeAlerta(msm, mensaje) {
    mensaje.innerText = msm;
    mensaje.style.display = "block"
}

function mostrarDonde(signo, asterisco) {
    asterisco.innerText = signo;
}

