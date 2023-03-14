
var ciao = 'ciao';
console.log(ciao);
let timerrr = document.getElementById('scriptt');
let nome= document.getElementById('Name');
let add= document.getElementById('aggiungi');
let cancel= document.getElementById('poppa');

let nomi = ['ciao']


add.addEventListener('click', (arg) => {
  let lelio = nome.value
  
   nomi.push(lelio);
   
   localStorage.setItem('',nomi);
   
   console.log(nome) })
   
  



cancel.addEventListener('click', (ergo) =>{
  nomi.pop()
  localStorage.setItem('',nomi)
   console.log(nomi)
})

  
  

window.onload = function() {
  // body...

setInterval(
    // body...
    
     function timer(){

        cico=eval(timerrr.innerHTML++);
        sessionStorage.setItem('tempo',cico)
       
     },
 
  1000);

}