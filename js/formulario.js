function guardar(){
validarCampo();
}

function validarCampo(){
    let nombre = document.getElementById("id_nombre").value;
    

    if(nombre===""){
        mostrarMensaje('Nombre necesario')
        mostrarAsterisco('id_error_nombre');
        validarEmail('')
        return;
    }

    let email = document.getElementById("id_email").value;

    if(email === ""){
        mostrarMensaje('Coloque un Email')
        mostrarAsterisco('id_error_email');
        return;
    } else {
        if (validarEmail(email) === false){
            mostrarMensaje('Email invalido');
        return;
        }
    }

    let apellido = document.getElementById("id_apellido").value;
    let fecha = document.getElementById("id_fecha").value;

    let password = document.getElementById("id_password").value;

}

function mostrarMensaje(msg) {
    let mensaje =document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block"
}

function mostrarAsterisco(ideElemento){
    document.getElementById(ideElemento).innerText='*';
}

function limpiarMensajes(){
    let mensaje =document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none"

    const erroresAsteriscos = document.querySelectorAll('.error_asterisco');
    erroresAsteriscos.forEach(e => e.innerText = '');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}