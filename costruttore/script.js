// node costruttore\script.js
// un costruttore permette di creare più istanze di un oggetto, invece che crearle 
// tutte singolarmante

function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

function print(carInst){
    console.log(`You chose a ${carInst.color} ${carInst.make} ${carInst.model} made in ${carInst.year}`)
}

const car1 = new car("Fiat", "Panda", "1990", "white");
print(car1);