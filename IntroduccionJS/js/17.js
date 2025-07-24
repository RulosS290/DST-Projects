const tecnologias = ['HTML', 'React.js', 'CSS', 'Node.js']
const numeros = [100, 20, 21, 53, 34]

// Filter

const newArray = tecnologias.filter((tech) => tech !== 'HTML')

console.log(newArray);

// Includes

const newArray2 = tecnologias.includes('CSS')

console.log(newArray2);

// Some - Devuelve si al menos uno cumple la condición

const newArray3 = numeros.some(numero => numero >= 15)

console.log(newArray3);

// Find - Devuelve el 1er elemento que cumpla una condición

const newArray4 = numeros.find(numero => numero > 20  && numero < 100)

console.log(newArray4);

// Every - Returna True o False si todos cumplen una condición

const newArray5 = numeros.every(numero => numero > 50)

console.log(newArray5);

// Reduce - retorna un acumulado del total

const newArray6 = numeros.reduce((total, numero) => {
    console.log(total);
    return total + numero
}, 0)