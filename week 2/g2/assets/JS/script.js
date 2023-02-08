
const Pgreco = 3.14;
var rio = 'Aldo';
const numero =15;


{
    let = client = 'Cliente';
    document.getElementById('concatena').innerHTML = rio + ', ' + client + ', ' + Pgreco;

    var insieme = rio + ', ' + client + ', ' + Pgreco;
    document.getElementById('concatena2').innerHTML = insieme;
}

{
    let nome = 'mario';
    let nome2 = 'carla';

    document.getElementById('var').innerHTML = nome;
    document.getElementById('let').innerHTML = nome2;
    document.getElementById('final').innerHTML = nome;

    document.getElementById('let2').innerHTML = nome;
    document.getElementById('let3').innerHTML = nome2;
    document.getElementById('final2').innerHTML = nome2;
}


let somma=numero+15;
let incre=somma++; 
let sott=numero-10;
    let decre=sott--;
    let div=numero/3;
    document.getElementById('iniziale').innerHTML='Valore iniziale: ' +numero;
    document.getElementById('valore1').innerHTML='Addizione e incremento: ' +incre +', '+somma;
    document.getElementById('valore2').innerHTML='Sottrazione e decremento: '+(numero-10)+', '+(sott--);
    document.getElementById('valore3').innerHTML='Moltiplicazione: ' +numero*3;
    document.getElementById('valore4').innerHTML='Divisione: ' +div;
    document.getElementById('valore5').innerHTML+=+ numero +' è un numero';
    
    

