const _URL = "https://swapi.dev/api/starships"
async function getData() {
    try {
        const response = await fetch(_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}
(async function(){
    const data =  await getData()
     console.log(data);
    } ())
