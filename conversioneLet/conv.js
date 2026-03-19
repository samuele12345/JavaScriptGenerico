/*node conversioneLet\conv.js
per eseguire nel terminale
*/

/*
Questo file mostra come convertire stringhe in Number, String e Boolean.
Se un valore non e convertibile in numero, JavaScript restituisce NaN.
*/
let x = "17";
let y= "stringa";
let z = "true";

// Conversioni esplicite di tipo.
x = Number(x);
y = String(y);
z = Boolean(z);

// Mostra il valore convertito insieme al suo tipo finale.
console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));