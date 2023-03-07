var btnverifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1;
var giocatore2;
var messaggio = document.getElementById('risultato')
var estratto;



/*window.addEventListener('load', function() {
    btnReset.setAttribute('disabled', 'true')
});*/


btnverifica.addEventListener('click', function(){
giocatore1 = document.getElementById('giocatore1');
giocatore2 = document.getElementById('giocatore2');
verifica()
});

function verifica(){
 if (!giocatore1 || !giocatore2) {
    messaggio.innerHTML='servono entrambi i numeri'
    return;
 } else if(Number(giocatore1) == 0 || Number(giocatore2)==0) {
        messaggio.innerHTML = 'inserire un valore tra 1 e 100'

 }else if (Number(giocatore1) ==  Number(giocatore2)) {
    messaggio.innerHTML = 'numeri diversi'
 }
 else{

    estrai();
    calcola();

 }
};

function estrai() {
    estratto = Math.floor((Math.random()*100)+1); 
}

function calcola() {
    btnReset.removeAttribute('disabled');
    document.getElementById('estratto').innerHTML = 'numero estratto' + estratto;

    if (Number(giocatore1) == estratto)
     {
        messaggio.innerHTML='giocatore 1 vince';

    } 
    else if (Number(giocatore1) == estratto)
     {
            messaggio.innerHTML='giocatore 2 vince';

    }
    
    else if (Math.abs((estratto - Number(giocatore1))) < Math.abs((estratto - Number(giocatore2))))
    {
        messaggio.innerHTML='nessuno ha vinto ma g1 si è avvicinato';
    }
    
        
     else if (Math.abs((estratto - Number(giocatore2))) < Math.abs((estratto - Number(giocatore1)))){
        messaggio.innerHTML='nessuno ha vinto ma g2 si è avvicinato';
     } 

         else {
            messaggio='pareggio';
         }

        
    };