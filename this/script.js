// node this\script.js
// this si riferisce all'oggetto ovvero al contesto immediato in cui si trova
// non funziona negli oggetti con le arrow functions

let obj = {
    name: "Francesco",
    cook: function(){console.log(`${this.name} is cooking!`)},
    // non funziona
    //clean: () => {console.log(`${this.name} is cleaning!`)}
    // funziona
    clean: () => {console.log(`${obj.name} is cleaning!`)}
}

obj.cook();
obj.clean();