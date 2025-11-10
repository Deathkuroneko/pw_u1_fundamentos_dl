let entradaCalculos = [];
let display = document.getElementById('display');

function mostraDisplay(valor) {
    if (valor === 'C') {
        // Limpiar todo
        entradaCalculos = [];
        display.innerText = '';
        return;
    }

    if (valor === '←') {
        // Borrar último elemento
        entradaCalculos.pop();
        display.innerText = entradaCalculos.join('');
        return;
    }

    if (valor === '=') {
        let resultado = calcular(entradaCalculos);
        display.innerText = resultado;
        entradaCalculos = (typeof resultado === "number") ? [resultado] : [];
        return;
    }

    // Añadir número o símbolo
    entradaCalculos.push(valor.toString());
    display.innerText = entradaCalculos.join('');

    /*let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;*/
}

function calcular(entradaCalculos) {

    if (entradaCalculos.length === 0) return 0;

    let cadenaFinal = [];

    // Combinacion de numeros entreros o decimales
    cadenaFinal = unirNumeros(entradaCalculos);

    // Errores de sintaxis
    let error = errorSintaxis(cadenaFinal);
    if (error) {
        return error;
    }

    // Porcentajes
    cadenaFinal = aplicarPorcentajes(cadenaFinal);

    // Multiplicaciones y divisiones
    cadenaFinal = multiDivi(cadenaFinal);

    // Sumas y restas
    cadenaFinal = sumaResta(cadenaFinal);

    return cadenaFinal[0];
}

function unirNumeros(arElementos) {

    let cadenaFinal = [];
    let numero = "";
    for (let i = 0; i < arElementos.length; i++) {
        const char = arElementos[i];

        if (!isNaN(char) || char === ".") {
            numero += char; // acumula dígitos o punto decimal
        } else {
            if (numero) {
                cadenaFinal.push(parseFloat(numero));
                numero = "";
            }
            cadenaFinal.push(char); // mete el operador
        }
    }

    if (numero) cadenaFinal.push(parseFloat(numero));

    return cadenaFinal;
}

/* function porcentajes(cadenaFinal) {
    for (let i = 0; i < cadenaFinal.length; i++) {
        if (cadenaFinal[i] === '%') {
            
            let base = cadenaFinal[i - 1];
            let porcentaje = base / 100;

            
            if (i >= 2 && (cadenaFinal[i - 2] === '+' || cadenaFinal[i - 2] === '-')) {
                let referencia = cadenaFinal[i - 3];
                porcentaje = referencia * (base / 100);
            }

            cadenaFinal.splice(i - 1, 2, porcentaje);
            i = 0; 
        }
    }
    return cadenaFinal;
} */


function errorSintaxis(cadenaFinal) {

    for (let i = 0; i < cadenaFinal.length; i++) {
        if (isNaN(cadenaFinal[i]) && isNaN(cadenaFinal[i + 1])) {
            return "Error";
        }
    }
    if (isNaN(cadenaFinal[cadenaFinal.length - 1])) {
        return "Error";
    }
    return null;
}

function multiDivi(cadenaFinal) {

    for (let i = 0; i < cadenaFinal.length; i++) {
        if (cadenaFinal[i] === '*' || cadenaFinal[i] === '/') {
            if (cadenaFinal[i] === '/' && cadenaFinal[i + 1] === 0) {
                return ["Error: División por 0"];
            }

            let res = cadenaFinal[i] === '*'
                ? cadenaFinal[i - 1] * cadenaFinal[i + 1]
                : cadenaFinal[i - 1] / cadenaFinal[i + 1];

            cadenaFinal.splice(i - 1, 3, res);
            i = 0;
        }
    }
    return cadenaFinal;
}

function sumaResta(cadenaFinal) {

    for (let i = 0; i < cadenaFinal.length; i++) {
        if (cadenaFinal[i] === '+' || cadenaFinal[i] === '-') {
            let res = cadenaFinal[i] === '+'
                ? cadenaFinal[i - 1] + cadenaFinal[i + 1]
                : cadenaFinal[i - 1] - cadenaFinal[i + 1];

            cadenaFinal.splice(i - 1, 3, res);
            i = 0;
        }
    }
    return cadenaFinal;
}