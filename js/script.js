/*  -----------------------------------------------------------------------------------------------
  
    **Snack1**

    Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
--------------------------------------------------------------------------------------------------- */

// Creo la variabile btn
let btn = document.querySelector('button');

// Funzione che stampa il numero
const stampNumber = function() {
    let inputNumber = document.getElementById('inputUser').value;
    let risultato = document.querySelector('.output');
    if(inputNumber % 2 == 0) { // Se il numero è pari, lo stampo così
        risultato.innerHTML = 'Questo numero è pari: ' + inputNumber;
    } else {
        inputNumber++; // Se il numero è dispari, stampo il numero successibo
        risultato.innerHTML = 'Questo numero era dispari, quindi stampo il suo successivo : ' + inputNumber;
    }
    inputUser.value = '';
}
btn.addEventListener('click', stampNumber);

/*  -----------------------------------------------------------------------------------------------
  
    **Snack2**

    Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
--------------------------------------------------------------------------------------------------- */