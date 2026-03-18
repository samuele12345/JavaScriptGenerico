/*esegue il codice solo quando l’HTML è stato caricato tutto, stessa funzione di defer 

addEventListener serve a “mettere in ascolto” un elemento per un evento, e dire 
quale funzione eseguire quando quell’evento accade.*/

document.addEventListener("DOMContentLoaded", () =>{
    const buttonDec = document.querySelector("#dec");
    const buttonRes = document.querySelector("#res");
    const buttonInc = document.querySelector("#inc");
    let numb = document.querySelector("#number");
    let counter = 0;

    buttonDec.addEventListener("click", () =>{
        counter--;
        numb.textContent = counter; // modifica contenuto del let testuale
    });

    buttonRes.addEventListener("click", () =>{
        counter = 0;
        numb.textContent = counter;
    });

    buttonInc.addEventListener("click", () =>{
        counter++;
        numb.textContent = counter;
    });
});