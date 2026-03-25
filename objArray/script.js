// node objArray\script.js
// un array di oggetti contiene elementi che si costituiscono di più proprietà

const people = [
    {nome: "Carlo", eta: 43},
    {nome: "Fanco", eta: 32},
    {nome: "Marco", eta: 37},
    {nome: "Giovanni", eta: 41}
]

function etaArray(person){
    return person.eta;
}

people.forEach(person => console.log(person));

let etas = people.map(etaArray);
let etas2 = people.map(person => person.eta);
// lo 0 è il valore iniziale dell'accumulatore non è obbligatorio, ma in questo caso serve
let sommaEta = people.reduce((acc, person) => acc + person.eta, 0);
let filtrEta = etas2.filter(et => et >= 41);
// per evitare la dichiarazione di etas2
// let filtrEta = people.map(person => person.eta).filter(eta => eta >= 41);

// trova l'ogetto con valore eta maggiore nell'array
let maxEta = people.reduce((max, person) => person.eta >= max.eta ? person.eta : max);

console.log(etas);
console.log(etas2);
console.log(sommaEta);
console.log(filtrEta);
// ritorna la proprietà eta dell'oggetto con valore eta maggiore nell'array
console.log(maxEta. eta);