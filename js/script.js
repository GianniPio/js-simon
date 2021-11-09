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
const table = document.getElementById("table");
const result = document.getElementById("risultato");
let userNumber = [];


while (numberRandom.length < 5) {
    let number = Math.floor(Math.random() *100) + 1;

    let duplicate = numberRandom.includes(number);

    if (!duplicate) {
        
        numberRandom.push(number); 
    }
}

// far appairre i numeri su schero
table.innerHTML = numberRandom;

// attiva la funziona dopo 30 secondi
setTimeout(simonSays, 30000);




























// funzione che pulisce lo schermo
    function simonSays() {
        table.innerHTML = "";

        for (let x = 0; x < 5; x++) {
    
            let number = prompt("Inserisci un numero");
        
            if (number == numberRandom[x]) {
                
                userNumber.push(number);
        
            }
            
        }

        if (userNumber.length == 5) {
            risultato.innerHTML = "Bravo/a, hai indovinato tutti i numeri!!!"
        } else if (userNumber.length == 0) {
            risultato.innerHTML = "Non hai indovinato nessun numero!!!"
        } else {
            risultato.innerHTML = `Hai indovinato ${userNumber.length} numeri e sono ${userNumber}`;
        }
        
    }


