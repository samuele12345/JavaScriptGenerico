// node arrowFunctions\script.js
// modo coinciso per scrivere una funzione

// function expression che usa una arrow function
// la arrow function si costituisce di parentesi tonde coonteneti i parametri,
// poi di "=>" e delle parentesi graffe in cui inserire le funzionalità
const greeting = (name, age) => {
    console.log(`Hello ${name}!`);
    console.log(`You are ${age} years old!`);
};

greeting("Sam", 23);
const infos = [
    {nome: "Franco", eta: 52, residenza: "Catanzaro"},
    {nome: "Giorgio", eta: 34, residenza: "Milano"}
];

const ident = (inform) =>{
    console.log(`Ti chiami ${inform.nome}, hai ${inform.eta} anni e abiti a ${inform.residenza}!`)
};

console.log();
infos.forEach(ident);



let array2 = [2, 3, 4, 9, 5]

// arrow function per ottenere un array contenete le potenze dell'array originario
const squareArray = array2.map((el) => {return Math.pow(el, 2)});
console.log(squareArray);

// arrow function che salva in una costante array i valori pari in array2
const pari = array2.filter((el) => {return el % 2 === 0});
console.log(pari);

// arrow function che salva in una costante la somma delle radici dei valori in array2
const risRad = array2.reduce((acc, el) => {return acc += Math.sqrt(el)});
console.log(risRad);