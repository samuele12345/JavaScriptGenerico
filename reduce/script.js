// node reduce\script.js
// reduce si applica ad array e ottiene una callback function che ha due parametri, 
// ovvero un accumulatore e un parametro attuale, l'accumulatore salva per ogni 
// step il risultato della funzione e viene ritornato, invece il parametro attuale 
// viene applicato all'accumulatore

let array = [1,2,3,4,5,6,7];

let res = array.reduce(mult);
console.log(res);

// ritorna il risultato della moltipliczione di tutti gli elementi dell'array
function mult(accumulatore, num){
    return accumulatore * num;
}
