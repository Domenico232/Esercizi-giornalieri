const delet = document.getElementById('Del');
const modif = document.getElementById('Mod');
const Urlw = "https://striveschool-api.herokuapp.com/api/product/";
let eventid = new URLSearchParams(window.location.search).get('Eventid')
console.log('EventId', eventid)

async function recharge() {
const response = await fetch(Urlw + eventid,{
    method:'GET',
    headers:{
        'Content-Type' : 'application/json',
        Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNDQ0MjksImV4cCI6MTY4MDI1NDAyOX0.SKDSxsb1AzOMvK_bZjuEqk2bmNaQvE5totKB1eZPxzg']
    }

    })
    dati = await response.json();

    document.getElementById('elemento').innerHTML += ': ' + dati.name;

    document.querySelector('#nome').innerHTML += dati.name

    document.getElementById('desc1').innerHTML += ': ' + dati.description

    console.log(dati.description)
    document.getElementById('brand1').innerHTML += ': ' + dati.brand
    console.log(dati.brand)
    document.getElementById('immage1').innerHTML += ': ' + dati.imageUrl
    console.log(dati.imageUrl)
    document.getElementById('price1').innerHTML +=  ': ' +dati.price
    console.log(dati.price)

};
  
recharge();



async function jerico() {
    const responsed = await fetch(Urlw+eventid,{
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNDQ0MjksImV4cCI6MTY4MDI1NDAyOX0.SKDSxsb1AzOMvK_bZjuEqk2bmNaQvE5totKB1eZPxzg']
        }
        }) 
        console.log(responsed)
    }; 



delet.addEventListener('click', function deleted() {
    if (confirm("Sei sicuro")) {
            jerico();
            alert('Articolo Cancellato correttamente')
       
      } else {

        alert("You pressed Cancel!");

      }
})



modif.addEventListener('click', async function dati() {
    
        let nomeogg = document.getElementById('nome');
        let descrizione = document.getElementById('desc');
        let brando = document.getElementById('brand');
        let Urlimage = document.getElementById('immage');
        let prezzo = document.getElementById('price');
    
     
    
    
        
        let oggetto = {
            brand : brando.value,
            description:descrizione.value ,
            imageUrl : Urlimage.value,
            name : nomeogg.value,
            price : prezzo.value,
         
           
            
            
        };
    
    
        console.log(oggetto)
    
    
        const response = await fetch(Urlw+eventid,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json',
                Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNDQ0MjksImV4cCI6MTY4MDI1NDAyOX0.SKDSxsb1AzOMvK_bZjuEqk2bmNaQvE5totKB1eZPxzg']
                
            },
    
            body : JSON.stringify(oggetto)
    
           
        }
        )
        datiarray = await response.json()
        console.log(response)
        console.log(datiarray)
        return response
    });
    


