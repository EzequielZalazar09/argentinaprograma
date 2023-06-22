let nombres = ["AnTo", "MarcOs", "EzE", "vERo"];
nombres_copia = nombres.slice(0, nombres.length);
nombres_copia.forEach((elemento, indice, array) => {
    array[indice] = elemento.toUpperCase();
})
console.log(nombres);
console.log(nombres_copia);

let n_c = nombres.map(e => {
    return e.toLowerCase()
})
console.log(n_c);