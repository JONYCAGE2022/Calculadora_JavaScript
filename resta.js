/* Funcion resta */
botonIgual.addEventListener("click", function resta() {
    let datos = datosInput.value;
    if (datos.includes("-")) {
        let numeros = datos.split("-");
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));
        let contador = 0;
        let restaTotal = 0;
        numeros.forEach(elemento => {
            if (restaTotal === 0) {
                restaTotal = conversionNumeros[0];
            }
            restaTotal -= conversionNumeros[contador];
            contador++;
        });
        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = restaTotal;
    }
});

/* Agrega el simnbolo resta en el input */
botonResta.addEventListener("click", function agregarResta() {
    datosInput.value += "-";
    datosInput.focus();
})