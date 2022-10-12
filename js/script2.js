/*  -----------------------------------------------------------------------------------------------
  
    **Snack2**

    Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
--------------------------------------------------------------------------------------------------- */

// Creo la variabile btn
let btnLista = document.querySelector('.btn-invitati');

// Creo l'array dove inserirò i valori randomici
let arrInvitati = [];

// Funzione che stampa la lista dei nomi
const stampList = function() {

    document.querySelector('.output-lista').innerHTML = '';

    // Lista Nomi
    let nome = ['Fabio', 'Leonardo', 'Marco', 'Giacomo', 'Giorgia', 'Laura', 'Mattia'];

    // Lista Cognomi
    let cognome = ['Martinelli', 'Giorgetti', 'Rossi', 'Verdi', 'Bianchini', 'Bravetti', 'Bagiacchi'];
    
    // Ciclo for
    for(let i = 0; i < 8; i++) {
        let listaRandom = Math.floor(Math.random()*nome.length); // lista random dei nomi
        let listaRandom2 = Math.floor(Math.random()*cognome.length); // lista random dei cognomi
        
        let listaNomi = nome[listaRandom];
        let listaCognomi = cognome[listaRandom2];

        arrInvitati.push(listaNomi + ' ' + listaCognomi);

        let lista = document.createElement('p');
        document.querySelector('.output-lista').append(lista);

        lista.innerHTML = arrInvitati[i];
    }
    arrInvitati = [];
}

btnLista.addEventListener('click', stampList);