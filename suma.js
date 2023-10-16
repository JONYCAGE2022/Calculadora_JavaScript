/* Datos del input */
let datosInput = document.querySelector(".form-control");
let botonIgual = document.getElementById("igual");
let botonClear = document.getElementById("clear");
let botonSuma = document.getElementById("suma");
let botonResta = document.getElementById("resta");
let botonMultiplicacion = document.getElementById("multiplicacion");
let botonDivision = document.getElementById("division");

/* Eventos */

/* Funcion suma */
botonIgual.addEventListener("click", function suma() {
    let datos = datosInput.value; /*tomo los valores del input*/
    if (datos.includes("+")) {
        let numeros = datos.split("+");/*divide la cadena que por ejemplo es 1+1 y la convierte en un array ['1','1']*/
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));/*convierte en numero flotante la cadena de array*/
        let contador = 0;
        let sumaTotal = 0;
        numeros.forEach(elemento => {/*realiza la suma*/
            sumaTotal += conversionNumeros[contador];
            contador++;
        });
        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = sumaTotal;
    }
});

/* Agrega el simnbolo suma en el input */
botonSuma.addEventListener("click", function agregarSuma() {
    datosInput.value += "+";
    datosInput.focus();
})

/* aqui realizamos la suma de otra manera
let suma = conversionNumeros.reduce((acumulador,numero) => acumulador + numero, 0);
alert (suma); */ 