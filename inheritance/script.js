// node inheritance\script.js
// l'ereditarietà comprende una classe parent e una o più classi child, 
// le classi child ereditano proprietà e metodi delle classi parent
// la classe child deve estendere la classe parent tramite extends
// aiuta con la riutilizzabilità del codice

class Car{
    isWorking = true

    isMoving(){
        return `The ${this.name} is moving`
    }

    isParked(){
        return `The ${this.name} is parked`
    }
}

class Mustang extends Car{
    name = "Mustang";
}

class Fiat extends Car{
    name = "Fiat";
}

class Ferrari extends Car{
    name = "Ferrari";
}

const mus = new Mustang();
const fiat = new Fiat();
const fer = new Ferrari();

console.log(fer.isWorking);
console.log(mus.isMoving());
console.log(fiat.isParked());