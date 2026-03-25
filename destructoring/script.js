// node destructoring\script.js
// per destructoring si intende destrutturazione di array e oggetti, ovvero partendo da
// un array o oggetto, scomporli nei loro elementi tramite [] o {}

let array = ["primo", "secondo", "terzo", "quarto"];

// inversione elementi
[array[3], array[0]] = [array[0], array[3]]

console.log(array);

let person = {
    nome: "Franco",
    cognome: "Riva",
    eta: 67
}

// l'oggettoviene destrutturato nei sui parametri della funzione
function display({nome, cognome, eta}){
    console.log(`${nome} ${cognome} ha ${eta} anni`);
}

display(person);