// node nestedObject\script.js
// un nested object è un oggetto figlio di un oggetto parent, logica simile
// alle classi

let person = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 34,
    // nested object
    posizione: {
        citta: "Milano",
        cap: 22789,
        // nested object in un nested object
        via:{
            nomeV: "Cadorna",
            numero: 17,
        }
    }
}


// in questo modo da person si accede alla proprietà nested posizione, si fa lo stesso
// con via e successivamente si arriva alla proprietà generica nomeV
console.log(person.posizione.via.nomeV);

// nested object nelle classi

class Car{
    constructor(model, year, ...info){
        this.model = model;
        this.year = year;
        this.info = new CarInfo(...info);
    }
}

class CarInfo{
    constructor(motore, velocitaMax, colore){
        this.motore = motore;
        this.velocitMax = velocitaMax;
        this.colore = colore;
    }
}

// crea un oggetto Car con nested object CarInfo
const macchina = new Car("Panda", 1992, "V8", 
                                        200, 
                                        "white");

console.log(macchina);
console.log(macchina.info.colore);