function isANumber(c){
    return !isNaN(Number(c))
}
function logicAnd(acumulador, valor){
    return acumulador = acumulador && valor;
}

let caracteresMezclados = "1a23c45v6";
let caracteresToArray = caracteresMezclados.split("");
let isNumberArray = caracteresToArray.map(isANumber);
let isNumber = isNumberArray.reduce(logicAnd, true);
console.log(caracteresToArray);
console.log(isNumberArray);
console.log(isNumber);