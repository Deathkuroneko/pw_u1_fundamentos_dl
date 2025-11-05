/* =======================
   FUNCIONES DE MANIPULACIÓN DEL DOM
======================= */

// Función para cambiar el Color
function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
// Funcion para camabiar el Tamaño de fuente
function cambiarTamanio(id_elemento, tamanio) {
    document.getElementById(id_elemento).style.fontSize = tamanio;
}
// Funcion para agrear Elementos
function agregarElemento1() {
    document.getElementById('id_div').innerHTML = '<h1>Calculadora</h1>';
}

function agregarElemento(elementoPadre, html) {
    document.getElementById(elementoPadre).innerHTML = html
}

function construirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>';
}
function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}
function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}
function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

/* =======================
   FUNCIONES DE CALCULADORA
======================= */
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;

    // Validar entradas vacías o no numéricas
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos en ambos campos.");
        return;
    }

    if (tipo === '+') resultado = sumar(num1, num2);
    if (tipo === '-') resultado = restar(num1, num2);
    if (tipo === '*') resultado = multiplicar(num1, num2);
    if (tipo === '/') {
        if (num2 === 0) {
            alert("Error: División por cero no es permitida.");
            return;
        }
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = resultado;

    function limpiarResultados() {
        document.getElementById('id_resultado').innerText = '0';
        document.getElementById('id_n1').value = '';
        document.getElementById('id_n2').value = '';
    }

    /* =======================
   FUNCIONES MATEMÁTICAS
======================= */
    function sumar(a, b) {
        return a + b;
    }   
    function restar(a, b) {
        return a - b;
    }           
    function multiplicar(a, b) {
        return a * b;
    }
    function dividir(a, b) {
        return a / b;
    }

}