// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pariODispariValue = document.getElementById('number').value;
let number = document.getElementById('number');
let randomNumber = numeroCasuale(1, 5);

document.getElementById("generate").addEventListener("click", function() {;

});



// funzione numero casuale
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// faccio la somma
let sum = number + randomNumber;