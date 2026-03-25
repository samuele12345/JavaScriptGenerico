// node callBack\script.js
// le callback functions sono funzioni passate come argomento ad altre funzioni
// per gestire operazioni asincrone

hello(howAreYou);

// in questo modo è assicurato che how are you venga stampato dopo hello
function hello(callback){
    console.log("Hello!")
    // l'operazione asincrona viene già gestita dal callback ma il timeout rende l'idea
    // ritarda l'esecuzione del callback di 3 secondi
    setTimeout(function(){ 
        callback();
    }, 3000);
}

function howAreYou(){
    console.log("How are you?")
}