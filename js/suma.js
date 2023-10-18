/* Funcion suma */
botonIgual.addEventListener("click", function suma() {
    let datos = getDatos();
    if (validarSuma(datos)) {
        let numeros = datos.split("+");/*divide la cadena que por ejemplo es 1+1 y la convierte en un array ['1','1']*/
        let conversionNumeros = numeros.map(cadena => parseFloat(cadena));/*convierte en numero flotante la cadena de array*/
        let sumaTotal = 0;
        conversionNumeros.forEach((elemento, indice) => {
            sumaTotal += conversionNumeros[indice];
        });
        validarTotal(sumaTotal);
    };
});

/* Valida si tiene el operador suma */
function validarSuma(datos) {
    if (datos.includes("+")) {
        return true;
    } else {
        return false;
    }
}

/* Con esto valido si hay operadores en el total */
function validarTotal(sumaTotal) {
    if (sumaTotal >= 0) {
        let elemento = document.getElementById("mostrar");
        elemento.innerHTML = sumaTotal;
    } else {
        alert("Debe ingresar los numeros");
    }
}

/* Agrega el simnbolo suma en el input */
botonSuma.addEventListener("click", function agregarSuma() {
    datosInput.value += "+";
    datosInput.focus();
})

/* aqui realizamos la suma de otra manera
let suma = conversionNumeros.reduce((acumulador,numero) => acumulador + numero, 0);
alert (suma); */ 