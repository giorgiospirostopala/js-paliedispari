/*

Pari e Dispari:
L’utente inserisce un numero da 1 a 5 (quindi pari o dispari)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto.

*/

// Devo chiedere il numero all'utente.
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Gli specifico se ne ha scelto uno pari o dispari.
if (numeroUtente % 2 === 0) {
    console.log(`Il numero scelto (${numeroUtente}) è pari.`);
} else {
    console.log(`Il numero scelto (${numeroUtente}) è dispari.`);
}

// Creo la prima funzione
function functNumeroComputer() {
    return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = functNumeroComputer();
console.log(`Il computer ha scelto: ${numeroComputer}`);

// Creo variabile somma dei due numeri
let somma = numeroUtente + numeroComputer;
console.log(`La somma dei due numeri è: ${somma}`);

// Tramite una funzione, stabilisco se la somma dei due numeri è pari o dispari
function verificaPariDispari(x) {
    if (x % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

let sommaDeiDueNum = verificaPariDispari(somma);
console.log(`"${somma}" è un numero ${sommaDeiDueNum}, perciò...`);

// Dichiaro il vincitore
if ((sommaDeiDueNum === "pari" && numeroUtente % 2 === 0) || (sommaDeiDueNum === "dispari" && numeroUtente % 2 !== 0)) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}