// Funciones que retornan valores

// const sumar = function(num1 = 0, num2 = 0){
//     return num1 + num2
// }

// function sumar(num1 = 0, num2 = 0) {
//     return num1 + num2
// }

// Esto solo funciona en una linea, si es mas extensa la funcion si es necesario {} y el return
const sumar = (num1 = 0, num2 = 0) =>  num1 + num2

let result = sumar(10, 30)
console.log(result);

result = sumar(300,1)
console.log(result);
