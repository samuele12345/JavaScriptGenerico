// metodi utili per le stringhe
// node strings\script.js

let stringa = " Stringa ";
let stringaSliced = stringa.slice(2, stringa.indexOf('g')); // salva i caratteri dall'indice 2 al 6 (dove si trova n, quindi g 
// non compresa, dato che è all'indice 7) di stringa in stringaSliced,
// let stringaSliced = stringa.slice(2, stringa.indexOf('g') + 1); con + 1 include g 
// let stringaSliced = stringa.slice(2); salva dall'indice 2 in poi
// funzionano anche i numeri negativi, ad esempio -1 corrisponde all'ultimo indice -2 al penultimo... 

console.log(stringa.charAt(3)); // stampa il carattere alla posizione 3
console.log(stringa.trim()); // togli gli spazi prima e dopo
console.log(stringa.toUpperCase()); // rende tutto maiuscolo
console.log(stringa.toLowerCase()); // rende tutto minuscolo
console.log(stringa.indexOf('n')); // ritorna l'indice del carattere 'n'
// lastIndexOf() per l'ultimo indice di un carattere che si ripete più volte
console.log(stringa.length); // lunghezza string in caratteri
console.log(stringa.repeat(3)); // ripete tre volte la stringa
console.log(stringa.startsWith(" ")); // ritorna true se la string inizia con " ", false in caso contrario
console.log(stringa.endsWith(" ")); // ritorna true se la string finisce con " ", false in caso contrario
console.log(stringa.includes('o')); // ritorna true se la string contiene 'o', false in caso contrario
console.log(stringa.replaceAll(" ", "$")); // sostituisce " " con "$"
console.log(stringa.padStart(13, "1")); //aggiunge 1 all'inizio finchè la stringa non raggiunge 15 caratteri di lunghezza
console.log(stringa.padEnd(13, "1")); //aggiunge 1 alla fine finchè la stringa non raggiunge 15 caratteri di lunghezza
console.log(stringaSliced); // stampa stringa sliced


//esempi di utilizzo concreto:
// - creare uno username da una email

let email = "nome@gmail.com";
let email2 = "nomegmail.com";
let email3 = "nome@gmail.co";
let emailArray = [email, email2, email3];
let username = email.slice(0, email.indexOf("@"));
console.log("username: " + username);
let i=0;

// - riconoscere un'email
while(i < emailArray.length){
    if(emailArray[i].includes('@') && (emailArray[i].includes(".com") || emailArray[i].includes(".it"))){
        console.log(emailArray[i] + " is an email")
    }else{
        console.log(emailArray[i] + " isn't an email")
    }
    i++;
}