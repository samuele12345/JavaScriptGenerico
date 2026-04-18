// node async_await\script.js

/*
Async fa sì che una funzione restituisca sempre una Promise,
anche se sembra restituire un valore normale.

Await si può usare solo dentro una funzione async
(e nei moduli moderni anche al livello principale) e serve ad aspettare
che una Promise venga completata.

Questo rende il codice asincrono più leggibile,
perché sembra scritto in modo sequenziale.

Con async non si usano direttamente i parametri resolve e reject
come dentro new Promise(...):
- se ritorni un valore, è come fare resolve(valore)
- se lanci un errore, è come fare reject(errore)

Dopo await, la funzione riprende la sua esecuzione
solo quando la Promise è stata risolta o rifiutata.
Per gestire eventuali errori si usa spesso try...catch.

quindi await fa si che una async function aspetti una promise prima di continuare
*/


function canePasseggio(){
    return new Promise((resolve, reject) =>{
        // setTimeout simula un'operazione che richiede tempo.
        // resolve = operazione riuscita
        // reject = operazione fallita
        setTimeout(() =>{
            const x = Math.random() * 10;
            let canePortato;

            // Se la condizione va bene, la Promise viene risolta.
            // Il valore passato a resolve() arriverà nel then(value => ...).
            if(x < 5){
                canePortato = "Ho portato fuori il cane!";
                resolve(canePortato);
            }else{
                // Se qualcosa va male, la Promise viene rifiutata.
                // Il valore passato a reject() arriverà nel catch(error => ...).
                canePortato = "NON ho portato fuori il cane!";
                reject(canePortato);
            }
        }, 2000)
    })
}

// Anche qui viene creata una nuova Promise per il secondo compito.
function pulireCucina(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const y = Math.random() * 10;
            let cucinaPulita;

            if(y < 5){
                cucinaPulita = "Ho pulito la cucina!"
                resolve(cucinaPulita)
            }else{
                cucinaPulita = "NON ho pulito la cucina!"
                reject(cucinaPulita)
            }
        }, 3000)
    })
}

// Terza Promise: parte solo se la precedente è andata a buon fine.
function fuoriSpazzatura(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const z = Math.random() * 10;
            let spazzaturaPortata;

            if(z < 5){
                spazzaturaPortata = "Ho portato fuori la spazzatura!";
                resolve(spazzaturaPortata);
            }else{
                spazzaturaPortata = "Non ho portato fuori la spazzatura!";
                reject(spazzaturaPortata);
            }
        }, 1000)
    })
}

// async indica che questa funzione restituisce automaticamente una Promise.
// Dentro possiamo usare await per aspettare i risultati in ordine.
async function doChores(){
    try{
        // await ferma temporaneamente questa funzione finché la Promise non si completa.
        const walkDogResult = await canePasseggio();
        console.log(walkDogResult);

        // Questo codice parte solo dopo che canePasseggio() è terminata con successo.
        const cleanKitchenResult = await pulireCucina();
        console.log(cleanKitchenResult);

        // Anche questo passaggio aspetta il completamento della Promise precedente.
        const takeOutTrashResult = await fuoriSpazzatura();
        console.log(takeOutTrashResult);
    }catch(error){
        // Se una qualunque Promise va in reject, l'esecuzione salta qui.
        console.error(error);
    }
}

// Avvia la funzione asincrona.
doChores();