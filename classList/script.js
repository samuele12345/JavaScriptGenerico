/*
classList è la proprietà di un elemento utile per interagire con la lista di
classi dell'elemento in questione
- add(): aggiunge una classe alla lista
- remove(): rimuove una classe dalla lista
- toggle(): aggiunge se non c'è o rimuove se c'è una classe dalla lista 
- replace(vecchiaClasse, nuovaClasse): sostituisce una classe della lista con 
un'altra
- contains(): verifica se una classe è contenuta nella lista
*/

const button = document.querySelector(".but");
const tit = document.querySelector("#title1");

// Hover enter: forza il riavvio dell'effetto e aumenta leggermente il pulsante.
button.addEventListener("mouseover", event =>{
    event.target.classList.remove("hover");
    void event.target.clientWidth;
    event.target.classList.add("hover");
    event.target.style.scale = "1.05";
    event.target.style.cursor = "pointer";
});

// Hover leave: ripristina stato base del bottone.
button.addEventListener("mouseout", event =>{
    //event.target.classList.remove("hover");
    event.target.classList.toggle("hover");
    event.target.style.scale = "1";
    event.target.style.cursor = "";
});


// Secondo listener mouseover di prova: alterna la classe hover due volte.
button.addEventListener("mouseover", event =>{
    //event.target.classList.remove("hover");
    event.target.classList.toggle("hover");
    void event.target.clientWidth;
    //event.target.classList.add("hover");
    event.target.classList.toggle("hover");
    event.target.style.scale = "1.05";
    event.target.style.cursor = "pointer";
});

// Al click il bottone cambia colore (green -> red -> blue -> green)
// e il titolo aggiorna sia testo sia classe colore corrispondente.
button.addEventListener("click", event =>{
    if(event.target.classList.contains("green")){
        event.target.classList.replace("green", "red");
        tit.classList.replace("greentex", "redtex");
        tit.textContent = "Red";
    }else if(event.target.classList.contains("red")){
        event.target.classList.replace("red", "blue");
        tit.classList.replace("redtex", "bluetex");
        tit.textContent = "Blue";
    }else if(event.target.classList.contains("blue")){
        event.target.classList.replace("blue", "green");
        tit.classList.replace("bluetex", "greentex");
        tit.textContent = "Green";
    }
});