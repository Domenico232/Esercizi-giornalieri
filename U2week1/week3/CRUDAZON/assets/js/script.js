

const Urlw = "https://striveschool-api.herokuapp.com/api/product/";
const Btn = document.getElementById('invio'); 

    let nomeogg = document.getElementById('nome');
    let descrizione = document.getElementById('desc');
    let brando = document.getElementById('brand');
    let Urlimage = document.getElementById('immage');
    let prezzo = document.getElementById('price');
    console.log(nomeogg)

    async function sciogli(){
    const response = await fetch(Urlw,{
        method:'GET',
        headers:{
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNjc0MDQsImV4cCI6MTY4MDI3NzAwNH0.bKg77ACTPce7yMb-D7RhYLiFnys2VcT1QKOPOffBhmQ']
        },
    })
    jeni = await response.json()
    console.log(jeni)
}
sciogli();

 

Btn.addEventListener('click', async function dati() {
    
    let oggetto = {
        brand : brando.value,
        description:descrizione.value ,
        imageUrl : Urlimage.value,
        name : nomeogg.value,
        price : prezzo.value,
     
       
        
        
    };


    console.log(oggetto)


    const response = await fetch(Urlw,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNjc0MDQsImV4cCI6MTY4MDI3NzAwNH0.bKg77ACTPce7yMb-D7RhYLiFnys2VcT1QKOPOffBhmQ']
            
        },

        body : JSON.stringify(oggetto)

       
    }
    )
    datiarray = await response.json()
    console.log(response)
    console.log(datiarray)
    return response
})



