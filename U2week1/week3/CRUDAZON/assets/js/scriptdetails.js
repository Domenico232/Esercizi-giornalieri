const img = document.getElementById('ciao');
const URLo = 'https://striveschool-api.herokuapp.com/api/product/';
let eventid = new URLSearchParams(window.location.search).get('_id')
console.log('EventId', eventid)


async function fetchata(){

    const response = await fetch(URLo + eventid,{
        headers: {
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNjc0MDQsImV4cCI6MTY4MDI3NzAwNH0.bKg77ACTPce7yMb-D7RhYLiFnys2VcT1QKOPOffBhmQ']
        },
        
    
    })
    const immagini = await response.json();
    console.log(immagini);

    img.innerHTML = ` <div id="container px-5">
    <img src="${immagini.imageUrl}" alt="image">
    <div py-2>
        <b> description  </b><br>
        ${immagini.description}
    </div>
    <div>
       <b> brand: ${immagini.brand} </b>
    </div>
    <div>
        Price:${immagini.price} $
        <button class=btn bg-info>Compra</button>
    </div>
    
</div>`
    
    
}



console.log(fetchata());