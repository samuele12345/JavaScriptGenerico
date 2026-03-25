// node map\script.js
// map accetta una callback function e la applica ad ogni elemento di un array
// ritornando l'array modificato

let i = 0;
let array = ["zeresimo", "primo", "secondo", "terzo"];

// viene aggiunto il numero corrispondente ad ogni elemento dell'array
let modArray = array.map(aggiuntaNum);

function aggiuntaNum(elem){
    return elem += String(i++);
}

console.log(modArray);