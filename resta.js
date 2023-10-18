/* Funcion resta */
botonIgual.addEventListener("click", function resta() {
    let datos = getDatos();
    if (validarResta(datos)) {
        let numeros = datos.split("-");
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));
        let arraySinNaN = conversionNumeros.filter(function(elemento) { return !isNaN(elemento);});
        let contador = 0;
        let restaTotal = 0;
        arraySinNaN.forEach(elemento => {
            if (restaTotal === 0) {
                restaTotal = arraySinNaN[0];
            }
            restaTotal -= arraySinNaN[contador];
            contador++;
        });
        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = restaTotal;
    }
});

/* Valida si tiene el operador resta */
function validarResta(datos) {
    if (datos.includes("-")){
        return true;
    } else {
        return false;
    }
}

/* Agrega el simnbolo resta en el input */
botonResta.addEventListener("click", function agregarResta() {
    datosInput.value += "-";
    datosInput.focus();
})