/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself = 'Domenico'

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    console.log(element)
    
};

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push('mario');

console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.pop();
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
function sposta() {
   let primo = pets.shift();
    pets.push(primo)
}
sposta();
console.log(pets)
/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

function C(){
 

   lello = pets.map(animale => animale.slice(0,1) == 'c' )

   for (let index = 0; index < lello.length; index++) {
    const element = lello[index];
    console.log(element)
}
}

C();

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function ges() {
    cars.forEach(element => {
        element.Lincensepart = 'diopo'
    });
}
ges();

console.log(cars);


/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
function add(pinco, pallino, cirio, [sale,pepe,filo]) {
    cars.push({brand : pinco, model: pallino, color: cirio, trims: [sale,pepe,filo]})
    console.log(cars);
}

add('gino','mario','pecora',['francesco','marco','pino']);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui

for (let index = 0; index < cars.length; index++) {
    const element = cars[index].trims;
    jerico = element.slice(0,1)
    justFirstTrims.push(jerico)
}

console.log(justFirstTrims);

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
for (let index = 0; index < cars.length; index++) {
    const element = cars[index].color;

    if (element.length <= 4) {
        console.log('fizz')

        
    }else{
        console.log('buzz')
    }
    
}
console.log(cars);

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
let auto2trims = []
for (let index = 0; index < cars.length; index++) {
    
    const element = cars[index].trims;
    const brando = cars[index].brand;
    
    if (element.length >= 2) {
    auto2trims.push(brando)
}
}
console.log(auto2trims)

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
map1 = [];
for (let index = 0; index < cars.length; index++) {

    const element = cars[index].brand;
    const element2 = cars[index].model;
    
    let gino = element + ' '+ element2
    map1.push(gino)
console.log(map1)
}

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while (i < 14) {

    console.log(numericArray[i]);
  

   i++;
};

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
