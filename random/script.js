// node random\script.js

const min = 3;
const max = 7;

// numero random tra 3 e 7 arrotondato
result = Math.floor(Math.random() * (max-min)) + min;

console.log("risultato: " + result);