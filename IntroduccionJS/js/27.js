// Performance y Multiple Async Await

const URL = 'https://jsonplaceholder.typicode.com/comments'
const URL2 = 'https://jsonplaceholder.typicode.com/todos'

const consultarAPI = async() => {
    try {
        const inicio = performance.now()
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data);

        const response2 = await fetch(URL2)
        const data2 = await response2.json()
        console.log(data2);
        
        const final = performance.now()
        console.log(`El resultado es ${final - inicio} funcion I`);
    } catch (error) {
        console.log(error);
    }
}

const consultarAPI2 = async() => {
    try {
        const inicio = performance.now()
        const [response, response2] = await Promise.all([fetch(URL), fetch(URL2)])
        const [data, data2] = await Promise.all([response.json(), response2.json()])
        
        console.log(data);
        console.log(data2);
        
        const final = performance.now()
        console.log(`El resultado es ${final - inicio} funcion II`);
    } catch (error) {
        console.log(error);
    }
}

consultarAPI()
consultarAPI2()