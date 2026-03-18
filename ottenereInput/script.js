let result;

const button = document.querySelector("#submit");
let parag = document.querySelector("#par");

// get user input:
// let input = window.prompt("insert someting:");

button.onclick = function () {
    
    const content = document.querySelector("#request");
    result = content.value.trim();
    if (result === "") {
        window.alert("insert something");
    } else {
        content.value = "";
        parag.textContent = `You wrote ${result}`;
    }
    
};