class lista{

    constructor(_task){

        this.task=_task;
    }

}


let lists = document.getElementById('lista');
let textInput = document.getElementById('Inserisci');
let buttonAdd = document.getElementById('invia');
let elenco= [];



/*add.addEventListener('click', function inserisci(){
    new lista(input.value);
    elenco.push(input.value)
    console.log(elenco)
    document.getElementById('lista').innerHTML += '<li>'+input.value+'<button type="reset"> cancella </button> </li>'
   ;
});*/

buttonAdd.addEventListener('click', generateList);

function generateList(event) {
    event.preventDefault();

    if (textInput.value === '') return;

    const li =  document.createElement('li');
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));
    
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.appendChild(document.createTextNode('X'));    
    li.appendChild(buttonDelete);
    
    textInput.value = '';
    
    buttonDelete.addEventListener('click', (event) =>{
        const parentNodeEl = event.target.parentNode;
        setTimeout(() =>{
            parentNodeEl.remove();
        }, 500)
        
    });
         
}




