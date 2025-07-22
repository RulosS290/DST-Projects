const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const tecnologias2 = tecnologias.map(function(tech) {
    console.log(tech); 
    if(tech === 'Node.js') {
        return 'Nest.js'
    } else {
        return tech
    }
})

console.log(tecnologias2);


// const tecnologias2 = tecnologias.filter(function(tech) {
//     console.log(tech);
    
//     if(tech !== 'HTML')
//     {
//         return tech
//     }
// })

// tecnologias.push('Nest.js')

// console.table(tecnologias)

// const newTecnologies = [...tecnologias, 'Nest.js']

// console.table(newTecnologies)
