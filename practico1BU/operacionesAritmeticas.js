let var1 = 10;
let var2 = 12;
let var3 = 4;
let var4 = 2;

let suma = var1 + var2;
let resta = var3 - var4;
let resultadoFinal = suma * resta;
console.log(resultadoFinal);

let esPar = resultadoFinal % 2 === 0;

console.log("Mis variables iniciales fueron: " + var1 + "," + " " + var2 + "," + " " + var3 + "," + " " + "y" + " " + var4 +
            "\nEl resultado final es: " + resultadoFinal +
            "\nLa respuesta a verificar si el resultado final par es: " + esPar);