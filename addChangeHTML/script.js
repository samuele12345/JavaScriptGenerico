const newTitle = document.createElement("h1");
const newPar = document.createElement("p");
const newDiv = document.createElement("div");
const newOrderedL = document.createElement("ol");
const newLi = document.createElement("li");



newTitle.textContent = "Sono un titolo aggiunto dopo";
newPar.textContent = "Sono un nuovo paragrafo";
newTitle.id = "newTit";

// Creazione e configurazione di un nuovo titolo da inserire nel body.
newTitle.style.color = "tomato";
newTitle.style.textAlign = "center"; // già impostato in body, solo a titolo di esempio
// document.body.append(newTitle);
document.body.prepend(newTitle);

newDiv.innerHTML = `<h1> sono il titolo di un nuovo div </h1>
                    <p> sono un paragrafo di un nuovo div </p>`

// Contenuto HTML generato dinamicamente per il nuovo div e la nuova lista ordinata.
newOrderedL.innerHTML = `<li>Element1</li>
                        <li id="li1">Element2</li>
                        <li>Element3</li>
                        <li>Element4</li>`


newLi.textContent = "newElement";
newLi.style.fontWeight = "700";

newOrderedL.style.marginLeft = "50px"

// Stili applicati direttamente via JavaScript al nuovo contenitore.
newDiv.style = "border: 1px solid black; margin: 5px auto; padding: 10px"
                    
newDiv.height = "100px"                                                 
newDiv.width = "50%"
// non si può fare sia append che prepend in contemporanea relativamente alla stessa costante

// Recupera tutti i contenitori esistenti per inserirvi i nuovi elementi.
const divs = document.querySelectorAll(".cont");

divs[0].append(newPar);

newPar.style.color = "green";

// Inserisce il nuovo div prima del terzo contenitore originale.
document.body.insertBefore(newDiv, divs[2]);

//divs[0].removeChild(newPar); per eliminare newPar dal div alla posizione 0 in divs

// Aggiunge la lista all'interno del terzo contenitore originale.
divs[2].append(newOrderedL);



newOrderedL.id = "oList";
const list = document.querySelectorAll("#oList li")
const li1 = document.querySelector("#li1")

// Inserisce un nuovo elemento prima del terzo item della lista.
newOrderedL.insertBefore(newLi, list[2])


