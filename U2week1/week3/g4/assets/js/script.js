
const img = document.getElementById('ciao');
const URLo = 'https://api.pexels.com/v1/curated';
const URLu = 'https://api.pexels.com/v1/search?query=Tigers';
const URLi = 'https://api.pexels.com/v1/search?query=Pears';
const btn1 = document.getElementById('load');
const btn2 = document.getElementById('loadnew');
let hider = document.getElementById('hide0')

async function fetchata(){

    const response = await fetch(URLo,{
        headers: {
            Authorization:['DjXHv21Cpz4UTy4uqMeU23v8hdQl30GRk3kMynDgUFhN6lRQkxOsKGhX']
        },
        
    
    })
    
    const immagini = await response.json();
    console.log(immagini);

 gesu = immagini.photos;
console.log(gesu)

for (let index = 0; index < gesu.length; index++) {
    const element = gesu[index].src.original;
    const ciccio = gesu[index].id;
    const fotogra = gesu[index].photographer;
    let classe = ([index]);

    img.innerHTML += ` <div class="col-md-4"  id="${classe}">
    <div class="card mb-4 shadow-sm">
      <img src="${element}" alt="">
      <div class="card-body">
        <h5 class="card-title">${fotogra}</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary"  onclick="funzioneDaEseguire(${classe})" id='hide'>
              hide
            </button>
          </div>
          <small class="text-muted">${ciccio}</small>
        </div>
      </div>
    </div>
  </div>`
    console.log(element)
    console.log(classe)
    
}

}

fetchata();











btn1.addEventListener('click', async function nuovef() {
    img.innerHTML = ''
    const response = await fetch(URLi,{
        headers: {
            Authorization:['DjXHv21Cpz4UTy4uqMeU23v8hdQl30GRk3kMynDgUFhN6lRQkxOsKGhX']
        },
        
    
    })
    
    const immagini = await response.json();
    console.log(immagini);

 gesu = immagini.photos;
console.log(gesu)

for (let index = 0; index < gesu.length; index++) {
    const element = gesu[index].src.original;
    const ciccio = gesu[index].id;
    const fotogra = gesu[index].photographer;
    let classe = ([index]);
    img.innerHTML += ` <div class="col-md-4"  id="${classe}">
    <div class="card mb-4 shadow-sm">
      <img src="${element}" alt="">
      <div class="card-body">
        <h5 class="card-title">${fotogra}</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary"  onclick="funzioneDaEseguire(${classe})" id='hide'>
              hide
            </button>
          </div>
          <small class="text-muted">${ciccio}</small>
        </div>
      </div>
    </div>
  </div>`
    console.log(element)
    console.log(classe)
}})



btn2.addEventListener('click', async function nuovefoto() {
    img.innerHTML = ''
    const response = await fetch(URLu,{
        headers: {
            Authorization:['DjXHv21Cpz4UTy4uqMeU23v8hdQl30GRk3kMynDgUFhN6lRQkxOsKGhX']
        },
        
    
    })
    
    const immagini = await response.json();
    console.log(immagini);

 gesu = immagini.photos;
console.log(gesu)

for (let index = 0; index < gesu.length; index++) {
    const element = gesu[index].src.original;
    const ciccio = gesu[index].id;
    const fotogra = gesu[index].photographer;
    let classe = ([index]);
    img.innerHTML +=` <div class="col-md-4"  id="${classe}">
    <div class="card mb-4 shadow-sm">
      <img src="${element}" alt="">
      <div class="card-body">
        <h5 class="card-title">${fotogra}</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary"  onclick="funzioneDaEseguire(${classe})" id='hide'>
              hide
            </button>
          </div>
          <small class="text-muted">${ciccio}</small>
        </div>
      </div>
    </div>
  </div>`
    console.log(element)
    console.log(classe)
}})

function funzioneDaEseguire(classe) {

    let text = classe.toString();
    console.log(text)
    let elemento = document.getElementById(text);
    console.log(elemento)
    elemento.classList.add('d-none');
}




