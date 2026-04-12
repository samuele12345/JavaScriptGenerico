/*
Le nodeList sono delle collezioni statiche (non si aggiornano autonomamente) 
di elementi tramite id, classi o elementi stessi.
possno essere raggruppate e assegnate tramite querySelectorAll()

*/


let bottoni = document.querySelectorAll(".buttons");
let par = document.createElement("p"); // 1 creazione elemento
// 2 impostazione stile nuovo elemento
par.style.marginTop = "50px";


bottoni.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "rgb(96, 96, 227, 0.8)";
        event.target.style.cursor = "pointer";
        event.target.style.scale = "1.05";
    });
});

bottoni.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(96, 96, 227)";
        event.target.style.scale = "1";
    });
});

bottoni.forEach((button, index) =>{
    button.addEventListener("click", () => {
        par.textContent = `Cliccato Bottone ${index + 1}`;
        // ripasso append ma la soluzione migliore sarebbe assegnare il valore
        // ad un paragrafo già esistente e inizialmente nascosto,
        // così quando il paragrafo appare, i bottoni sopra non si spostano verso
        // l'alto
        document.body.append(par);
    });
});