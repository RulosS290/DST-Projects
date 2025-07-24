// Fetch API con Async / Await

const URL = 'https://jsonplaceholder.typicode.com/comments'

// const consultarAPI = () => {
//     fetch(URL)
//         .then((response) => {
//             if(response.ok){
//                 return response.json(response)   
//             }
//             throw new Error('Hubo un error...')   
//         })
//         .then((data) => {
//             console.log(data);
//         }) 
//         .catch(error => {
//             console.log(error.message);
//     })
// }

const consultarAPI = async() => {
    try {
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error("Hubo un error...");
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consultarAPI()