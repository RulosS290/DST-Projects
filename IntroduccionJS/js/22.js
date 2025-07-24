// Optional chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion I',
    aprobado: true,
    examenes: {
        examen1: 40
    }
}

console.log(alumno.examenes?.examen1);

console.log('Despues de Alumno');

// Nullish coalescing operator (??)

const pagina = null ?? 1
console.log(pagina);
