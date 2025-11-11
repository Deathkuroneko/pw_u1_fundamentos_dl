let entradaCalculos = [];
let display = document.getElementById('display');

function mostraDisplay(valor) {
    
    // Limpiar todo
    if (valor === 'C') {
        entradaCalculos = [];
        display.innerText = '';
        return;
    }

    // Borrar último carácter
    if (valor === '←') {
        entradaCalculos.pop();
        display.innerText = entradaCalculos.join('');
        return;
    }

    // Calcular resultado
    if (valor === '=') {
        let resultado = calcular(entradaCalculos);
        display.innerText = resultado;
        entradaCalculos = (typeof resultado === "number") ? [resultado] : [];
        return;
    }

    // Agregar valor al array y mostrar en display
    entradaCalculos.push(valor.toString());
    display.innerText = entradaCalculos.join('');

}

function calcular(entradaCalculos) {

    if (entradaCalculos.length === 0) return 0;

    let cadenaFinal = [];

    // Combinacion de numeros entreros o decimales
    cadenaFinal = unirNumeros(entradaCalculos);

    // Procesar porcentajes y validar errores de %
    cadenaFinal = procesarPorcentajes(cadenaFinal);
    if (cadenaFinal.length === 1 && cadenaFinal[0] === "Error") {
        return "Error";
    }

    // Errores de sintaxis generales
    let error = errorSintaxis(cadenaFinal);
    if (error) {
        return error;
    }

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
        //validar si es numero/punto decimal y acumular 
        if (!isNaN(char) || char === ".") {
            numero += char; 
        } else {
            if (numero) {
                cadenaFinal.push(parseFloat(numero));
                numero = "";
            }
            cadenaFinal.push(char); 
        }
    }

    // Agregar el último número si existe
    if (numero) cadenaFinal.push(parseFloat(numero));

    return cadenaFinal;
}

function procesarPorcentajes(cadenaFinal) {
    let resultado = [];

    for (let i = 0; i < cadenaFinal.length; i++) {
        let actual = cadenaFinal[i];
        let siguiente = cadenaFinal[i + 1];

        // Validar error de operadores consecutivos (excepto '%')
        if (isNaN(actual) && isNaN(siguiente) && actual !== '%' && siguiente !== '%') {
            return ["Error"];
        }

        // Si el carácter actual es '%'
        if (actual === '%') {
            // Error si está al inicio
            if (i === 0 || isNaN(cadenaFinal[i - 1])) {
                return ["Error"];
            }

            // Convierte el número anterior en su valor decimal
            let base = parseFloat(resultado.pop());
            resultado.push(base / 100);
        }
        else {
            resultado.push(actual);
        }
    }

    // Error si el último carácter es un operador excepto '%'
    let ultimo = cadenaFinal[cadenaFinal.length - 1];
    if (isNaN(ultimo) && ultimo !== '%') {
        return ["Error"];
    }

    return resultado;
}



function errorSintaxis(cadenaFinal) {

    // Verificar operadores consecutivos
    for (let i = 0; i < cadenaFinal.length; i++) {
        if (isNaN(cadenaFinal[i]) && isNaN(cadenaFinal[i + 1])) {
            return "Error";
        }
    }
    // Verificar que el primer y último elemento no sean operadores
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