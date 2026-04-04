// node codiceAsincrono\script.js

// In JavaScript, il codice sincrono viene eseguito in ordine, una riga dopo l'altra.
// Il codice asincrono, invece, permette di "programmare" operazioni che termineranno
// piu tardi (per esempio timer, richieste HTTP, lettura file), senza bloccare il resto.
// Nota: JavaScript in Node.js usa un singolo thread principale e l'event loop per
// coordinare queste operazioni asincrone.
// Event loop, in breve:
// 1) Esegue lo stack del codice sincrono.
// 2) Le operazioni asincrone (es. timer) vengono delegate all'ambiente runtime.
// 3) Quando sono pronte, le callback entrano in coda.
// 4) Se lo stack è libero, l'event loop prende la callback dalla coda e la esegue.
// Quindi con setTimeout non si "ferma" il programma: la callback parte solo quando
// il timer è terminato e il thread principale è disponibile.

// esempio sincrono:
// vengono eseguiti uno dopo l'altro in modo sequenziale
console.log("stampa1");
console.log("stampa2");
console.log("stampa3");
console.log();

// esempio asincrono:
// qui usiamo una callback per eseguire `func2` solo dopo che `func1` ha finito.
// L'asincronia in JavaScript si gestisce in genere con:
// 1) callback
// 2) Promise
// 3) async/await

function func1(callback){
    // `setTimeout` avvia un timer non bloccante: il codice interno viene eseguito
    // dopo ~3000 ms. Quando scade il timer, stampiamo "stampa1" e poi richiamiamo
    // la callback per continuare il flusso.
    setTimeout(() => {
        console.log("stampa1");
        callback();
    }, 3000)
}

function func2(){
    // Questa funzione parte solo quando `func1` invoca la callback.
    console.log("stampa2");
    console.log("stampa3");
}

// Passiamo `func2` come callback a `func1`.
// Ordine finale di stampa:
// - subito: niente da `func1` (parte il timer)
// - dopo circa 3 secondi: stampa1, stampa2, stampa3
func1(func2);