//Ternarios

const saldo = 1000
const pagar = 500
const tarjeta = true
const auth = true

// auth
//     ? console.log('Usuario autenticado') 
//     : console.log('Usuario no autenticado')

saldo > pagar || tarjeta
    ? console.log('Puedes pagar')
    : console.log('No puedes pagar')