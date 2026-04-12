const div = document.querySelector("#div-img");
const button = document.querySelector("#but");

// Nasconde il div principale e rende visibile il pulsante di ripristino.
div.addEventListener("click", () =>{
    div.style.visibility = "hidden";
    button.style.display = "block";
    button.style.visibility = "visible";
});

// Ripristina il div e nasconde di nuovo il pulsante.
button.addEventListener("click", () =>{
    div.style.visibility = "visible";
    button.style.display = "none";
    button.style.visibility = "hidden";
});