/* Funcion multiplicacion */
botonIgual.addEventListener("click", function multiplicacion() {
    let datos = getDatos();
    if (validarMultiplicacion(datos)) {
        let numeros = datos.split("*");
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));
        let contador = 1;
        let multiTotal = conversionNumeros[0];
        numeros.forEach((elemento, indice) => {
            if (contador < conversionNumeros.length) {
                multiTotal *= conversionNumeros[contador];
                contador++;
            }
        });

        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = multiTotal;
    }
});

/* Valida si tiene el operador de multiplicacion */
function validarMultiplicacion(datos) {
    if (datos.includes("*")){
        return true;
    } else {
        return false;
    }
}

/* Agrega el simnbolo de la multiplicacion en el input */
botonMultiplicacion.addEventListener("click", function agregarMulti() {
    datosInput.value += "*";
    datosInput.focus();
})