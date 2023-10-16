/* Funcion multiplicacion */
botonIgual.addEventListener("click", function division() {
    let datos = datosInput.value;
    if (datos.includes("/")) {
        let numeros = datos.split("/");
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));
        let contador = 1;
        let multiTotal = conversionNumeros[0];
        numeros.forEach(elemento => {
            if (contador < conversionNumeros.length) {
                multiTotal /= conversionNumeros[contador];
                console.log(multiTotal);
                contador++;
            }
        });

        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = multiTotal;
    }
});

/* Agrega el simnbolo de la multiplicacion en el input */
botonDivision.addEventListener("click", function agregardivision() {
    datosInput.value += "/";
    datosInput.focus();
})