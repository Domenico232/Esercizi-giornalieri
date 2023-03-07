var meno = '-';
var piu = '+';
var diviso = '/';
var per = '*';


var calcolotot = document.getElementById("calcolo");



document.getElementById('cancel').addEventListener('click', function () {
 
    calcolotot.innerHTML = ""; 
    
});


document.getElementById('1').addEventListener('click', function () {
    calcolotot.innerHTML += 1;
});



document.getElementById('2').addEventListener('click', function () {
    calcolotot.innerHTML += 2;
});

document.getElementById('3').addEventListener('click', function () {
    calcolotot.innerHTML += 3;
});



document.getElementById('4').addEventListener('click', function () {
    calcolotot.innerHTML += 4;
});


document.getElementById('5').addEventListener('click', function () {
    calcolotot.innerHTML += 5;
});



document.getElementById('6').addEventListener('click', function () {
    calcolotot.innerHTML += 6;
});

document.getElementById('7').addEventListener('click', function () {
    calcolotot.innerHTML += 7;
});



document.getElementById('8').addEventListener('click', function () {
    calcolotot.innerHTML += 8;
});

document.getElementById('9').addEventListener('click', function () {
    calcolotot.innerHTML += 9;
});



document.getElementById('0').addEventListener('click', function () {
    calcolotot.innerHTML += 0;
});


document.getElementById('addizione').addEventListener('click', function () {
    calcolotot.innerHTML += piu;

});

document.getElementById('-').addEventListener('click', function () {
    calcolotot.innerHTML += meno;

});

document.getElementById('moltiplicazione').addEventListener('click', function () {
    calcolotot.innerHTML += per;

});

document.getElementById('divisione').addEventListener('click', function () {
    calcolotot.innerHTML += diviso;

});


document.getElementById('=').addEventListener('click', function () {
    
    document.getElementById("calcolo").innerHTML = eval(document.getElementById('calcolo').innerHTML);

});


