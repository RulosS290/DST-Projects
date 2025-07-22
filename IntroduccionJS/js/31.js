// Eventos de DOM - Inputs

const inputName = document.querySelector('#nombre')
inputName.addEventListener('input', (e) => {
    console.log('escribiendo: ', e.target.value, e.target.value.length);
    
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)

function functionPassword(){
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 500);
}