// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pariODispari = document.getElementById('choise');
let pariODispariValue = document.getElementById('choise').value;
let userNumber = document.getElementById('number');
let randomNumber = numeroCasuale(1, 5);



// funzione numero casuale
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// CICLO PER VEDERE CHI HA VINTO
document.getElementById("generate").addEventListener("click", function() {;
    let userNumber = document.getElementById('number').value;
    let pariODispariValue = document.getElementById('choise').value;
    let randomNumber = numeroCasuale(1, 5);

    // IN CASO SIA PARI
    // validation
    if (userNumber < 1 || userNumber > 6 || isNaN(userNumber)) {

        alert('non hai inserito un numero valido')

        if (pariODispariValue == 1) {

            const sum = parseInt(userNumber) + randomNumber;
            console.log('La somma è: ' + sum);
            if (sum % 2 == 0) {
                console.log('HAI VINTO!')
            } else {
                console.log('HA VINTO IL COMPUTER');
            }
            //   IN CASO SIA DISPARI
        } else if (pariODispariValue == 2) {

            const sum = parseInt(userNumber) + randomNumber;


            console.log('La somma è: ' + sum);
            if (sum % 2 == 1) {
                console.log('HAI VINTO!')
            } else {
                console.log('HA VINTO IL COMPUTER');
            }
            //  IN CASO IL VALORE INSERITO NON SIA CORRETTO
        } else {
            alert('non hai selezionato pari o dispari')

        }
    }
})