// node functionExpression\script.js
// si può assegnare a una costante o variabile direttamente una funzione
// senza pensare effettivamente a un nome per la funzione stessa
// in questo modo non si dichiarano inutilmente funzioni che verranno usate 
// una sola volta

array = ["a", "b", "c", "d"];

// ritorna la somma delle stringhe in array
const entireStr = array.reduce(function(cont, letter){
    return cont + letter;
})

console.log(entireStr);