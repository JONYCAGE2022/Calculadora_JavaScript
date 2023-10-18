/* Funcion multiplicacion */
botonIgual.addEventListener("click", function division() {
    let datos = getDatos();
    if (validarDivision(datos)) {
        let numeros = datos.split("/");
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));
        let contador = 1;
        let multiTotal = conversionNumeros[0];
        numeros.forEach(elemento => {
            if (contador < conversionNumeros.length) {
                multiTotal /= conversionNumeros[contador];
                contador++;
            }
        });

        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = multiTotal;
    }
});

/* Valida si tiene el operador de division */
function validarDivision(datos) {
    if (datos.includes("/")){
        return true;
    } else {
        return false;
    }
}


/* Agrega el simnbolo de la multiplicacion en el input */
botonDivision.addEventListener("click", function agregardivision() {
    datosInput.value += "/";
    datosInput.focus();
})