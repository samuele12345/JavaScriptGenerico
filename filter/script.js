// node filter\script.js
// filter si applica ad un array e accetta come parametri callback functions
// serve per creare un nuovo array filtrando gli elementi di un altro array
// a cui viene applicato
// il filtraggio avviene tramite i valori booleani ritornati da una callback function

// array di oggetti
let people = [{name: "Henry", age: 16}, 
    {name: "Frank", age: 24}, 
    {name: "John", age: 17}, 
    {name: "Jack", age: 19}, 
    {name: "Al", age: 27}, 
    {name: "Chris", age: 21}];

let adultPeople = people.filter(isAdult);
let notAdultPeople = people.filter(isNotAdult);
adultPeople.forEach(print);
notAdultPeople.forEach(print);

// la callback function filtra le persone contenute nell'array che hanno 18 anni o
// più di 18 anni
function isAdult(person){
    return person.age >= 18;
}

// la callback function filtra le persone contenute nell'array che hanno meno di 18 anni
function isNotAdult(person){
    return person.age < 18;
}

// funzione che stampa i nomi delle persone filtrate
function print(person){
    if(adultPeople.includes(person)){
        console.log(person.name + " is an adult!");
    }else{
        console.log(person.name + " isn't an adult!");
    }
}