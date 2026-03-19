// node spreadOperator\server.js
// In sintesi, lo spread operator (...) espande un iterabile nei suoi elementi.
// Funziona con stringhe, array, argomenti di funzione e in merge/copie.

// Stringa semplice: e anch'essa iterabile carattere per carattere.
let username = "user";

// Array di esempio.
let users = ["user1", "user2"]

// Espande la stringa in un array di singoli caratteri.
let letters = [...username];

// Stessa espansione, poi join per visualizzare i caratteri separati da trattino.
let letters2 = [...username].join("-");

console.log(username);
console.log(letters);
console.log(letters2);

// Espansione dell'array in output separati (non come singolo array stampato).
console.log(...users);