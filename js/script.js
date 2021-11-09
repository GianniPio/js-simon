// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Creare un array con 5 numeri random

// 2. Far vedere questi numeri per 30 secondi
    // 2.1 Far partire timer di 30 secondi
    // 2.2 Dopo i 30 secondi, i numeri scompaiono

// 3. Tramite il promt, far inserire all'utente 5 numeri

// 4. In base a quanti numeri ha indovinato, esce un messaggio

const numberRandom = [];
const table = document.getElementById("ciao");


// generazione random dei numeri
for (let i = 0; i < 5; i++) {
     let number = Math.floor(Math.random() *10) + 1;
    
     numberRandom.push(number);
}

table.innerHTML = numberRandom;
