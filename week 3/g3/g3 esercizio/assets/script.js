class lista{

    constructor(_task){

        this.task=_task;

    }
}


let lista1 = document.getElementById('lista');
let input = document.getElementById('inserisci')
let add = document.getElementById('invia')



add.addEventListener('click', function inserisci(){
    document.getElementById('lista').innerHTML += `<li>${input}</li>`;
});
