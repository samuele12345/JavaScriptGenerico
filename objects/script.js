// node objects\script.js
// un oggetto è una variabile che può contenere più variabili

let infos = {
    name: "Joe",
    surname: "Swanson",
    employed: false,
    age: 40,
    sayHello: () => {console.log("Hello Pita")}
}

console.log(`Hello, i'm ${infos.name} ${infos.surname} and i'm ${infos.age} years old`);

if(infos.employed){
    console.log("I'm employed");
}else{
    console.log("I'm not employed");
}

infos.sayHello();
