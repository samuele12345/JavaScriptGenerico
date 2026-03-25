// node getterSetter\script.js
// i setters sono metodi speciali che rendono le proprietà leggibili anche se non esitono
// stampando undefined e permettono di stampare un errore nell caso non 
// siano adatte al contesto (VANTAGGIO PRINCIPALE), quindi rendono le proprietà scrivibile
// invece i getter ritornano la proprietà modificata dal setter, rendendola leggibile

class NomeCognome{
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
    }

    //serve per stampare un errore in caso il valore non sia corretto
    set nome(newNome){
        if(typeof newNome !== 'string'){
            console.error("Errore: il nome deve essere una stringa")
        }else{
            // se è corretto viene salvato in una proprietà e ritornato dal get
            this._nome = newNome;
        }
    }

    get nome(){
        return this._nome;
    }

    set cognome(newCognome){
        if(typeof newCognome !== 'string'){
            console.error("Errore: il cognome deve essere una stringa")
        }else{
            this._cognome = newCognome;
        }
    }

    get cognome(){
        return this._cognome;
    }

    get nomcognom(){
        return this._nome + " " + this._cognome;
    }

}

let nomCog = new NomeCognome(3, "Citterio");

console.log(nomCog.nome);
console.log(nomCog.cognome);
nomCog.nome = "Filippo";

console.log(nomCog.nome);
console.log(nomCog.cognome);

let nomCog2 = new NomeCognome("Giorgio", "Salvi");
console.log(nomCog2.nome);
console.log(nomCog2.cognome);
// ci si può accedere come se fosse una proprietà esistente
console.log(nomCog2.nomcognom);