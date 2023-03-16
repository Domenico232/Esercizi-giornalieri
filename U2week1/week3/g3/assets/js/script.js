
async function convertijson() {
    const response = await fetch('https://striveschool-api.herokuapp.com/books')
    console.log(response)
    const dati = response.json()
    
}
convertijson();