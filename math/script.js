// node math\script.js

// Valori di partenza usati per mostrare varie operazioni dell'oggetto Math.
let x = 5.2148;
let x1 = 2;
let x2 = 7;

// Esempi delle funzioni matematiche piu comuni in JavaScript.
let z = Math.round(x); //arrotonda
let y = Math.floor(x); //arrotonda per difetto
let n = Math.ceil(x); // arrotonda per eccesso
let m = Math.trunc(x); // toglie i numeri dopo la virgola
let p = Math.pow(x, x1); // potenza
let s = Math.sqrt(x); // radice
let l = Math.log(x); // logaritmo
let si = Math.sin(x); // seno
let cos = Math.cos(x); // coseno
let tan = Math.tan(x); // tangente
let abs = Math.abs(x); // assoluto
let sign = Math.sign(x); // ritorna il segno, 1 positivo, -1 negativo, 0 per x=0
let max = Math.max(x, x1, x2 ) // ritorna il massimo
let min = Math.min(x, x1, x2 ) // ritorna il minimo
let pi = Math.PI; // valore di pi greco
let e = Math.E; // valore di e

// Stampa a terminale i risultati delle varie trasformazioni.
console.log(x + " arrotondato: " + z);
console.log(x + " arrotondato per difetto: " + y);
console.log(x + " arrotondato per eccesso: " + n);
console.log(x + " senza decimali: " + m);
console.log(x + " potenza: " + p);
console.log(x + " radice: " + s);
console.log(x + " logaritmo: " + l);
console.log(x + " seno: " + si);
console.log(x + " coseno: " + cos);
console.log(x + " tangente: " + tan);
console.log(x + " assoluto: " + abs);
console.log(x + " segno: " + sign);
console.log(x + ", " + x1 + ", " + x2 + " massimo: " + max);
console.log(x + ", " + x1 + ", " + x2 + " minimo: " + min);
console.log("pi greco: " + pi);
console.log("e: " + e);