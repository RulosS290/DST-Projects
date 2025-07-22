//Objetos - Destructuring de dos mas objetos

const product = {
    name : 'Tablet',  // Key : Valor
    price: 300,
    available: false
}

const client = {
    name: 'Daniel',
    premiun: true,
    direccion: {
        calle: 'Carrera 8 #4a-16'
    }
}

const { name } = product
const { name : clientName, direccion: { calle }} = client

console.log(name);
console.log(clientName);
console.log(calle);



