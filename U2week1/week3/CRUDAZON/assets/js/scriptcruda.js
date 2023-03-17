const img = document.getElementById('ciao');
const URLo = 'https://striveschool-api.herokuapp.com/api/product/';

async function fetchata(){

    const response = await fetch(URLo,{
        headers: {
            Authorization:['Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNDQ0MjksImV4cCI6MTY4MDI1NDAyOX0.SKDSxsb1AzOMvK_bZjuEqk2bmNaQvE5totKB1eZPxzg']
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
    const desco = gesu[index].description
    const brando = gesu[index].brand
    let classe = ([index]);

    img.innerHTML += ` <div class="col-md-4"  id="${classe}">
    <div class="card mb-4 shadow-sm">
      <img src="${element}" alt="">
      <div class="card-body">
        <h5 class="card-title">${fotogra}</h5>
        <p class="card-text">
          ${desco} <br>
         <b> brand </b>: ${brando}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="./Backoffdel.html?Eventid=${gesu[index]._id}" type="button" class="btn btn-sm btn-outline-secondary">
              Modify
            </a>
            <button type="button" class="btn btn-sm btn-outline-secondary"  onclick="funzioneDaEseguire(${classe})" id='hide'>
              Buy
            </button>
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