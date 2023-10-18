/* Datos del input */
let datosInput = document.querySelector(".form-control");
let botonIgual = document.getElementById("igual");
let botonClear = document.getElementById("clear");
let botonSuma = document.getElementById("suma");
let botonResta = document.getElementById("resta");
let botonMultiplicacion = document.getElementById("multiplicacion");
let botonDivision = document.getElementById("division");

/* Guarda los valores del input */
function getDatos() {
    let datos = datosInput.value;
    return datos;
}