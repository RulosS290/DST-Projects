// Manipular elementos HTML con CSS

const heading = document.querySelector('.heading')

const navegacion = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'
heading.id = 'Nuevo ID'

heading.removeAttribute('id')

const inputName = document.querySelector('#nombre')
inputName.value = 'Un nuevo valor'