/*
node json/script.js

json (Javascript Object Notation) è un formato di interscambio dati tra server e 
un applicazione web.
Solitamente i files json sono oggetti costituiti da coppie key-value {key: value},
array di valori [value1, value2, value3...] oppure arrai di oggetti [{}, {}, {}]

nella cartella sono presenti diversi file json con formati validi

JSON.stringify() : converte un oggetto JS in una stringa JSON 
JSON.parse() : converte una stringa JSON in un oggetto JS
*/

//import { readFile } from "node:fs/promises";

// esempi di JSON.stringify()

// array e sua trasformazione in stringa utilizzabile in JSON con strigify
const names = ["Franco", "Marco", "Giovanni", "Samuele"];
const jsonString = JSON.stringify(names);

// oggetto e sua trasformazione in stringa utilizzabile in JSON con strigify
const person = {
    "name": "Franco",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Pescare", "Nuotare", "Leggere"]
}
const jsonObject = JSON.stringify(person);


// array di oggetti e sua trasformazione in stringa utilizzabile in JSON con strigify
const people = [{
    "name": "Franco",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Pescare", "Nuotare", "Leggere"]
}, 
{
    "name": "Marco",
    "age": 31,
    "isEmployed": true,
    "hobbies": ["Ippica", "Calcio"]
}, 
{
    "name": "Giovanni",
    "age": 20,
    "isEmployed": false,
    "hobbies": ["Correre", "Karate"]
},
{
    "name": "Samuele",
    "age": 22,
    "isEmployed": true,
    "hobbies": ["Programmazione", "Palestra"]
}]
const jsonArrayOfObjects = JSON.stringify(people);

console.log("stampa di costanti originali e rappresentazioni in formato stringa JSON");
// stampa l'array di stringhe names
console.log(names);
// stampa la rappresentazione JSON dell'array names come unica stringa
console.log(jsonString);

console.log();

// stampa il singolo oggetto person
console.log(person);
// stampa la rappresentazione JSON dell'oggetto person come unica stringa
console.log(jsonObject);

console.log();

// stampa l'array di oggeti people
console.log(people);
// stampa la rappresentazione JSON dell'array di ogetti people come unica stringa
console.log(jsonArrayOfObjects);

console.log();


// esempi di JSON.parse()
// stringhe rappresentanti: un array, un oggetto e un array di oggetti
const jsonNames= `["Franco", "Marco", "Giovanni", "Samuele"]`;
const jsonPerson = `{"name": "Franco", "age": 30, "isEmployed": true, "hobbies": ["Pescare", "Nuotare", "Leggere"]}`;
const jsonPeople = `[{"name": "Franco", "age": 30, "isEmployed": true, "hobbies": ["Pescare", "Nuotare", "Leggere"] }, 
                     {"name": "Marco", "age": 31, "isEmployed": true, "hobbies": ["Ippica", "Calcio"]}, 
                     {"name": "Giovanni", "age": 20, "isEmployed": false, "hobbies": ["Correre", "Karate"]},
                     {"name": "Samuele", "age": 22, "isEmployed": true, "hobbies": ["Programmazione", "Palestra"]}]`;

// trasformazione delle stringhe in: un array, un oggetto e un array di oggetti con parse
const namesString = JSON.parse(jsonNames);
const personString = JSON.parse(jsonPerson);
const peopleString = JSON.parse(jsonPeople);

// stampa dei risultati di parse
console.log("stampa dei parse");
console.log(namesString);
console.log(personString);
console.log(peopleString);

console.log();

// lettura di un file JSON con Node.js
/*
const jsonFile = await readFile(new URL("./people.json", import.meta.url), "utf-8");
const peopleFromFile = JSON.parse(jsonFile);
console.log("contenuto di people.json letto da file");
console.log(peopleFromFile);
*/

console.log();

async function fetchStampa(){
    try{
        console.log("Array ottenuto da fetch di people.json e stampato");
        // invia la richiesta HTTP per leggere il file people.json
        // funziona nel browser solo se la pagina è servita da un server locale
        const result1 = await fetch("./people.json");
        // converte il contenuto JSON della risposta in un array JavaScript
        const values1 = await result1.json();
        // stampa in console l'intero array ottenuto dal file JSON
        console.log(values1);

        console.log("Stampa dei campi name degli oggetti nell'array ottenuto da people.json");
        // per ogni oggetto dell'array stampa solo il valore della proprietà name
        values1.forEach(value2 => console.log(value2.name));
    }catch(error){
        console.log(error);
    }
    
}

/*
fetch("./people.json")
        // converte la risposta HTTP in un oggetto/array JavaScript leggendo il JSON
        .then(response => response.json())
        // stampa in console il valore JavaScript ottenuto dal file JSON
        .then(value => console.log(value));
        .catch(error => console.err(error));
*/
        
fetchStampa();