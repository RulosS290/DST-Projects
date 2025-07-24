// Fetch API con Promises

const URL = 'https://jsonplaceholder.typicode.com/comments'

fetch(URL)
    .then((response) => {
        if(response.ok){
            return response.json(response)   
        }
        throw new Error('Hubo un error...')   
    })
    .then((data) => {
        console.log(data);
    }) 
    .catch(error => {
        console.log(error.message);
    })