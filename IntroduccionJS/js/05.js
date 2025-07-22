// Objects
// Coleccion de propiedades y una propiedad es un asosiacion entre una clave y un valor

const product = {
    name : 'TV',  // Key : Valor
    price: 5000,
    available: false
}
// Freeze hace que el objeto sea const en su totalidad
// Object.freeze(product)

// Permite modificar propiedades existentes pero no añadir nuevas
// Object.seal(product)

// Reescribir un valor
product.available = true

// Sino existe la propiedad, la va a añadir
product.img = 'img.jpg'

// Eliminar propiedad
delete product.price

console.log(product);
