// node forEach\script.js

let array = [1, 2, 3, 4, 5, 6];

// forEach per la stampa degli elementi di array
array.forEach(el =>{
    console.log(el);
});

console.log();

// forEach che usa una callback function per stampare i singoli elementi
array.forEach(stampEl)

function stampEl(elem){
    console.log(elem);
}