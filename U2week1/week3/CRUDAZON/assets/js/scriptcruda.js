const img = document.getElementById('ciao');
const URLo = 'https://striveschool-api.herokuapp.com/api/product/';

async function fetchata(){

    const response = await fetch(URLo,{
        headers: {
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNjc0MDQsImV4cCI6MTY4MDI3NzAwNH0.bKg77ACTPce7yMb-D7RhYLiFnys2VcT1QKOPOffBhmQ']
        },
        
    
    })
    const immagini = await response.json();
    console.log(immagini);

 gesu = immagini;
console.log(gesu)

for (let index = 0; index < gesu.length; index++) {
    const element = gesu[index].imageUrl;
    const ciccio = gesu[index].price;
    const fotogra = gesu[index].name;
    const brando = gesu[index].brand
    let classe = ([index]);

    img.innerHTML += ` <div class="col-md-4"  id="${classe}">
    <div class="card mb-4 shadow-sm">
      <img src="${element}" alt="">
      <div class="card-body">
        <h5 class="card-title">${fotogra}</h5>
        <p class="card-text">
            Prodotto <br>
         <b> brand </b>: ${brando}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="./Backoffdel.html?Eventid=${gesu[index]._id}" type="button" class="btn btn-sm btn-outline-secondary">
              Modify
            </a>
            <a href='./details.html?_id=${gesu[index]._id}' type="button" class="btn btn-sm btn-outline-secondary">
              Buy
            </a>
          </div>
          <b class="text-muted">${ciccio}$</b>
        </div>
      </div>
    </div>
  </div>`
    console.log(element)
    console.log(classe)
    
}

}

fetchata();