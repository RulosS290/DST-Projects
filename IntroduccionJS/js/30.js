// Eventos del DOM

const heading = document.querySelector('.heading')

heading.addEventListener('click', () => {
    heading.textContent = "Nuevo heading al dar Click..."
})