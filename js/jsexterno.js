        function cambiarColor(id_elemento, color) {
            document.getElementById(id_elemento).style.color = color;
        }
        function cambiarTamanio(id_elemento, tamaño) {
            document.getElementById(id_elemento).style.fontSize = tamaño;
        }
        function agregarElemento1() {
            document.getElementById('id_div').innerHTML = '<h1>Calculadora</h1>'
        }
        function agregarElemento(elementoPadre, html) {
            document.getElementById(elementoPadre).innerHTML = html;
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

        /*Funciones de Calculadora*/

        function evaluarOperacion(tipo){
            let num1 = parseFloat(document.getElementById('id_n1').value);
            let num2 = parseFloat(document.getElementById('id_n2').value);
            let resultado = 0;
            if(tipo==='+'){
                resultado = sumar(num1,num2)
            }
            if(tipo==='-'){

            }
            if(tipo==='*'){

            }
            if(tipo==='/'){

            }
            document.getElementById('id_resultado').innerText = resultado;

        }

        function sumar(num1, num2){
            return num1+num2;
        }
        function restar(num1, num2){
            return num1-num2;
        }
        function multiplicar(num1, num2){
            return num1*num2;
        }
        function dividir(num1, num2){
            return num1/num2;
        }
        
