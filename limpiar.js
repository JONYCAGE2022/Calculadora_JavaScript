/* Funcion limpiar input */
botonClear.addEventListener("click", function limpiar() {
    datosInput.value = "";
    let elemento = document.getElementById("mostrar");
    elemento.innerHTML = "";
})