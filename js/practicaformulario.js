function guardar(){
validarCampo();
}

function validarCampo(){

    let nombre = document.getElementById("id_name").value;
        if(nombre === ""){
        mostrarMensaje('Nombre necesario')
        mostrarAsterisco('id_error_nombre');
        validarEmail('')
        return;
    }

    let card = document.getElementById("id_card").value;
    let date = document.getElementById("id_date").value;
    let cvv = document.getElementById("id_cvv").value;

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