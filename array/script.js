// node array\script.js

// Array di partenza usato per mostrare le operazioni principali.
let array = ["primo", "secondo", "terzo"]
console.log("array originale: " + array);

// Rimuove l'ultimo elemento dell'array.
array.pop();
console.log("array senza l'ultimo elemento: " + array);

// Aggiunge un elemento in coda.
array.push("quarto")
console.log("array con l'aggiunta di quarto alla fine: " + array);

// Aggiunge un elemento in testa (indice 0).
array.unshift("zeresimo");
console.log("array con l'aggiunta di zeresimo alla fine: " + array);

// Elimina il primo elemento dell'array.
array.shift()
console.log("array eliminando il primo elemento: " + array);

// Proprieta che indica il numero totale di elementi presenti.
console.log("lunghezza array: " + array.length);

// Restituisce l'indice del valore cercato, oppure -1 se non esiste.
console.log("posizione primo: " + array.indexOf("primo"));

// sort() ordina l'array (qui in ordine alfabetico, essendo stringhe).
console.log("array in ordine alfabetico: " + array.sort());

// reverse() inverte l'ordine corrente dell'array.
console.log("array in ordine alfabetico contrario: " + array.sort().reverse());

// at() ritorna un elemento di un array ricevendo l'indice in cui si trova
console.log("elemento all'indice 2: " + array.at(2));

// ritorna true o false se contiene oppure no l'elemento passato
let boolResult = array.includes("primo");

if(boolResult){
    console.log("l'array contiene l'elemento")
}else{
    console.log("l'array non contiene l'elemento")
}