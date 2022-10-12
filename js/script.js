/*  -----------------------------------------------------------------------------------------------
  
    **Snack1**

    Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
--------------------------------------------------------------------------------------------------- */

// Creo la variabile btn
let btnNumber = document.querySelector('.btn-number');

// Funzione che stampa il numero
const stampNumber = function() {
    let inputNumber = document.getElementById('inputUser').value;
    let risultato = document.querySelector('.output-number');
    
    if(inputNumber == '') { // Se il numero è pari, lo stampo così
        risultato.innerHTML = 'Devi immettere un valore!'
    } else if(inputNumber % 2 == 0) {
        risultato.innerHTML = 'Questo numero è pari: ' + inputNumber;
    } else {
        inputNumber++; // Se il numero è dispari, stampo il numero successibo
        risultato.innerHTML = 'Questo numero era dispari, quindi stampo il suo successivo : ' + inputNumber;
    }
    inputUser.value = '';
}
btnNumber.addEventListener('click', stampNumber);