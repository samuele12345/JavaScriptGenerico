
// node setTimeoutInterval\script.js

let nome = "Marco"

// sviluppa una funzione ad intervalli, in questo caso di 0.9 secondi
let interval = setInterval(() =>{
    console.log("il tuo nome è " + nome)
}, 900)

// clearInterval(interval) serve per concludere la ripetizione della suddetta funzione ad
// intervalli

// sviluppa una funzione dopo un periodo di tempo, in questo caso 3 secondi
let timeout = setTimeout(function(){
    console.log("Ripetizione conclusa")
    clearInterval(interval)
}, 3000)

// clearTimeout(timeout), annulla il timeout, utilizzato in blocchi di condizione
// o a seguito di un evento