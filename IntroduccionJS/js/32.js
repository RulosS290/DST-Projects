// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    
    const password = document.querySelector('#password').value

    const alertPrev = document.querySelector('.alerta')
    alertPrev?.remove()

    const alerta = document.createElement('div')
    alerta.textContent = 'Contenido de Alerta'
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
    console.log(alerta);
    

    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son requeridos'
        alerta.classList.add('bg-red-500')
    } else {
        alerta.textContent = 'Iniciando sesion'
        alerta.classList.add('bg-green-500')
    }
    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000);
})