// node date/script.js
// oggetto relativo a date e tempo

// senza passare argomenti viene salvata la data attuale
const date = new Date();
console.log(date);

// per una data precisa, struttura:
// anno, mese, giorno, ora, minuto, secondo, ms
const date2 = new Date(1974, 4, 17, 13, 15, 12, 7);
console.log(date2);

// versione stringa
const date3 = new Date("1974-05-17T12:15:12.007Z");
console.log(date3);

console.log(date.getFullYear()) // per ottenere l'anno in date
console.log(date.getMonth()) // per ottenere il mese in date
console.log(date.getDate()) // per ottenere il giorno in date
console.log(date.getHours()) // per ottenere l'ora in date
console.log(date.getMinutes()) // per ottenere i minuti in date
console.log(date.getSeconds()) // per ottenere i secondi in date
console.log(date.getDay()) // per ottenere il giorno della settimana che corrisponde alla data


date.setFullYear(2011) // per settare l'anno in date
date.setMonth(3) // per settare il mese in date
date.setDate(12) // per settare il giorno in date
date.setHours(4) // per settare l'ora in date
date.setMinutes(52) // per settare i minuti in date
date.setSeconds(21) // per settare i secondi in date

console.log(date);