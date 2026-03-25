// node super\script.js
// super è usato per chiamare il costruttore o per accedere a metodi della classe parent
// in una classe child
// guarda la cartella inheritance

class Worker{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    job(type, som){
        console.log(`${this.name} is ${this.age} years old`)
        console.log(`is a ${type} and works on ${som}`)
    }
}

class Engineer extends Worker{
    // static non appartiene solo alla class child ma anche alla parent
    static work;

    constructor(name, age, something){
        // viene richiamato il costruttore della classe parent
        // in questo modo se più classi chil condividono gli stessi parametri
        // possono essere inseriti solo nella classe parent
        super(name, age);
        this.work = "engineer";
        this.something = something;
    }

    engJob(){
        // viene richiamato il metodo job della classe parent
        super.job(this.work, this.something);
    }
}

class Programmer extends Worker{

    constructor(name, age, something){
        super(name, age);
        this.work = "programmer"
        this.something = something;
    }

    progJob(){
        super.job(this.work, this.something);
    }
}

let pro = new Programmer("Sam", 23, "software");
let eng = new Engineer("Brunello", 22, "hardware");

pro.progJob();
eng.engJob();