//Objetos - Destructuring de dos mas objetos

const product = {
    name : 'Tablet',  // Key : Valor
    price: 300,
    available: false
}

const client = {
    name: 'Daniel',
    premiun: true
}

// const carrito = {
//     cantidad: 1,
//     ...product
// }

const newObject = {
    ...product,
    ...client
}

const newObject2 = Object.assign(product, client)

console.log(newObject2);
