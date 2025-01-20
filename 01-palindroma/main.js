/*

Palidroma:
• Chiedere all’utente di inserire una parola 
• Creare una funzione per capire se la parola inserita è palindroma

*/

// Prompt per l'inserimento della parola in formato standard (stringa).
let parolaInserita = prompt(`Inserisci qui la tua parola`);
console.log(parolaInserita);

// Uso .split("") per trasformare l'elemento stringa in un nuovo array contenente ciascuna lettera separatamente.
// let arrayCaratteri = parolaInserita.split("");
// console.log(arrayCaratteri);

// Uso .reverse() per invertire i caratteri di arrayCaratteri nel nuovo array arrayCaratteriInvertiti.
// let arrayCaratteriInvertiti = arrayCaratteri.reverse();
// console.log(arrayCaratteriInvertiti);

// Uso .join("") per convertire i caratteri della parola invertita in una vera e propria nuova stringa.
// let parolaInvertita = arrayCaratteriInvertiti.join("");
// console.log(parolaInvertita);

// Forma supercontratta.
let parolaInvertita = parolaInserita.split("").reverse().join("");
console.log(parolaInvertita);

// Apro la funzione
function verificaSePalindroma(parolaInserita, parolaInvertita) {

    if (parolaInserita === parolaInvertita) {
        // se uguali, è palindroma, quindi il return sarà "true":
        return true;
    } else {
        return false;
    }

}

// Devo chiamare la funzione per far sì che venga eseguita, non basta definirla. SPECIFICANDO i due argomenti!
let esitoVerifica = verificaSePalindroma(parolaInserita, parolaInvertita);

// Stampo con un if
if (esitoVerifica == true) {
    console.log(`La parola inserita ("${parolaInserita}") è palindroma.`)
} else {
    console.log(`La parola inserita ("${parolaInserita}") non è palindroma.`)
}