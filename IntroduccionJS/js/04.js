// Objects
// Coleccion de propiedades y una propiedad es un asosiacion entre una clave y un valor

// const product = {
//     name : 'TV',  // Key : Valor
//     price: 5000,
//     available: false
// }

// // console.log(product);
// // console.table(product)

// console.log(product.price);

// // Destructuring

// const { name, available } = product

// console.log(name, available);

// Object Literal Enhacement - Funcional si el nombre del objeto que quiero conservar es el mismo

const name = 'TV'
const price3 = 5000
const available = false

const product = {
    name,
    price : price3,
    available
}

console.log(product);
