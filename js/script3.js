/*  -----------------------------------------------------------------------------------------------
  
    **Snack3**

    Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
--------------------------------------------------------------------------------------------------- */

// Creo la variabile btn
let btnSomma = document.querySelector('.btn-somma');

// Creo l'array per i numeri
let arrNumeri = [];

// Creo la variabile dispari per immagazzinare i numeri nella posizione dispari
let dispari = 0;

// Creo la funzione per la somma
const somma = function() {

    // Creo la variabile numeriDaGenerare per dare un massimo di numeri 
    const numeriDaGenerare = 10;
    document.querySelector('.output-somma').innerHTML = '';
    let listaNumeri = document.querySelector('.lista-numeri');
    let risultatoSomma = document.querySelector('.output-somma');

    for(let i = 0; i <= numeriDaGenerare; i++) {
        let random = Math.floor(Math.random() * 100); // Variabile random con numeri randomici da 0 fino a 100
        
        arrNumeri.push(random); // Push del random all'interno dell'array

        // If per vedere la posizione dispari dei numeri
        if(i % 2 != 0) {
            dispari += arrNumeri[i];
        }
    
    listaNumeri.innerHTML = arrNumeri;
    risultatoSomma.innerHTML = 'La somma di tutti gli elementi che sono in posizioni dispari è: ' + dispari;
    }

    // Svuoto l'array e la variabile
    arrNumeri = [];
    dispari = 0;
}

btnSomma.addEventListener('click', somma);