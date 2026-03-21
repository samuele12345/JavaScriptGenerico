// node restParameters\script.js
// Rest parameter: fa l'opposto dello spread operator.
// Unisce singoli elementi in un unico array.
// Si usa quando il numero di parametri e variabile.


// ritorna il totale della somma di una serie di numeri
function sum(...numeri){
    let somma = 0;
    numeri.forEach(num =>{
        somma += num;
    });
    return somma;
}

function restFun(...carCompanies){
    // Stampa i parametri ricevuti come array.
    console.log(carCompanies);
}

function getArray(...carCompanies){
    // Ritorna i parametri sotto forma di array.
    return carCompanies;
}

let car1 = "toyota";
let car2 = "ford";
let car3 = "suzuki";
let car4 = "fiat";
let car5 = "dacia";

restFun(car1, car2, car3, car4, car5);

// array ritornato
let array = getArray(car1, car2, car3, car4, car5)
console.log(array);

// Salvataggio del totale in una variabile.
let totale = sum(6, 4, 9, 1, 5);
console.log("il totale è: " + totale);
