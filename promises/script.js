/*
node promises\script.js

fetch è una funzione di JavaScript che serve per fare una richiesta HTTP
verso una risorsa esterna, per esempio un'API o un file.

Relativamente alle Promise, fetch restituisce subito una Promise:
- se la richiesta parte correttamente, la Promise viene risolta con un oggetto Response;
- se c'è un errore di rete, la Promise viene rifiutata e finisce nel catch.

Per leggere davvero i dati, di solito si usa poi response.json(),
che restituisce a sua volta un'altra Promise.

La promise è un oggetto che gestisce codice asincrono, promettendo di restitire un valore
inizialmente è in stato pending (in attesa), se la richiesta si risolve coon successo 
passa in stato resolve, in caso contrario in stato reject

new Promise((resolve, reject) => {asynchronous code})
*/

// esempio con callback hell, metodo vecchio per eseguire funzioni in ordine:
/* compiti da completare:
    - portare il cane a passeggio
    - pulire la cucina
    - portare fuori la spazzatura
*/

/*
function canePasseggio(callback){
    setTimeout(() =>{
        console.log("Ho portato fuori il cane!")
        callback();
    }, 2000)
}

function pulireCucina(callback){
    setTimeout(() =>{
        console.log("Ho pulito la cucina!")
        callback();
    }, 3000)
}

function fuoriSpazzatura(callback){
    setTimeout(() =>{
        console.log("Ho portato fuori la spazzatura!")
        callback();
    }, 1000)
}

// callback hell, serie di callback annidati che diventa sempre più illeggibile
// più si aggiungono callbacks, pratica sconsigliata, le alternative migliori sono 
// le Promises
canePasseggio(() =>{
    pulireCucina(() =>{
        fuoriSpazzatura(() => console.log("Compiti finiti!"))
    })
})
*/

// Questa funzione restituisce una Promise.
// La Promise rappresenta un'operazione asincrona che finirà tra poco.
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

// molto più facilmente leggibile e scrivibile
// then() viene eseguito quando la Promise precedente è stata risolta con successo.
// Il parametro value contiene il risultato ricevuto dal resolve().
// Restituendo un'altra funzione con Promise, i then si concatenano in ordine.

canePasseggio().then(value => {console.log(value); return pulireCucina()})
               .then(value => {console.log(value); return fuoriSpazzatura()}) 
               .then(value => {console.log(value); console.log("Compiti finiti!")})
               // catch() intercetta un eventuale errore o reject nella catena.
               // console.error(error) lo stampa, ma il programma non va in crash.
               // se una Promise ritorna reject le successive vengono ignorate
               .catch(error => {console.error(error); console.log("Compiti NON finiti!")})