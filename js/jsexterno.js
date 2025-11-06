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

/* =======================
   FUNDAMENTOS JS
======================= */

    function fundamentosJS(){
        /*Tipos de variables*/
        // antigua y obsoleta
        var nombre = "Lema y Ninabanda";

        /* variables cambiantes: aplica el tipado dinamico-nose 
        necesita declara el tipo de dato, aun asi no es recomendable
        usar diferente tipos de variables en una sola*/
        let apellido = "Dylan y Eduardo";
        let apellido2 = "Casa";
        apellido2 = 10;
        let arreglo =[1,2,3,4,5,6];
        let semanaDia = ['Lunes', 'Martes', 'Miercoles'] // arreglos
        //Constantes
        const IVA = 12.8;
        //permite imprimir la consola en el navegador
        console.log('fundamentosJS'); 
        console.log(nombre); 
        console.log(IVA); 
        console.log(semanaDia); 
        //Arreglos es comun definirlos como const lo mas correcto
        const arreglosDiasSemanas = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
        arreglosDiasSemanas.push('Sabado');//agrear al arreglo
        console.log(arreglosDiasSemanas);
        arreglosDiasSemanas.unshift('Domingo');// agregar al incio
        console.log(arreglosDiasSemanas);
        console.log(arreglosDiasSemanas[0]);
        console.log('Manejo de nulos, undefined y vacios');
        arreglosDiasSemanas.push(null);
        arreglosDiasSemanas.push('');
        console.log(arreglosDiasSemanas[7]);
        console.log(arreglosDiasSemanas[8]);
        console.log(arreglosDiasSemanas[9]);
        // concatenacion - crea un nuevo arreglo para concatenar
        const numerosPares = [2,4,6,8];
        const numerosImpares = [3,5,7,9];
        const numerosTotales = numerosImpares.concat(numerosPares);
        console.log(numerosTotales);

        /*Sentencias de control*/
        // if
        let edad = 19;
        if(edad >=18){
            console.log('Es mayor de edad');
        } else {
            console.log('Es menor de edad');
        }

        // switch
        let dia = 'lunes'
        switch(dia){
            case 'lunes': 
                console.log(dia);
                break;
            case 'martes':
                console.log(dia);
                break;
            default:
                console.log('Ese dia no existe');
        }

        //for
        for (let i = 0; i <= 5; i++) {
            console.log(i);    
        }
        
        const frutas = ['manzana', 'sandia','papaya','pera','naranja'];
        
        for(let op of frutas){
            console.log(op);
        }

        /*Manejo de objetos
        - se declara en forma de Json */

        const profesor = {
            nombre: 'Eduardo',
            apellido: 'Lema',
            edad: '27',
            ecuatorano: true,
            genero: 'M',
            ciudad: 'Quito'
        }
        console.log(profesor);
        console.log(profesor.nombre);
        profesor.apellido = 'Casa';
        console.log(profesor);

        if(profesor.ciudad === 'Quito'){
            console.log('Es quiteño');
        }

        if (profesor.edad !== 36){
            console.log('Diferente de 36');
        } else {
            console.log('Igual a 36');
        }
        for(let clave in profesor){
            console.log(clave);
            console.log(profesor[clave]);
        }
    }
    
