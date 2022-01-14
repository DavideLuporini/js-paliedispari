// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente una parola
let userWord = prompt('inserisci una parola').trim();
console.log(userWord)

// scrivo una funzione per capovolgere la parola
function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return reversedWord;
}

// recupero la parola inserita dopo averle invertito le lettere
let reversedWord1 = reverseWord(userWord)
console.log(reversedWord1)

// controllo se la parola inserita e la parola invertita sono uguali

if (reversedWord1 == userWord) {
    alert('La parola inserita è palindroma')
} else {
    alert('la parola inserita non è palindroma')
}