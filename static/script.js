// node static\script.js
// static definisce proprietà e funzioni che appartengono alla classe e non all'oggetto

class Rectangle{
    static nSquares = 4;

    static getArea(b, h){
        console.log(`The area is: ${b*h}cm`);
    }

    static getPer(b, h){
        console.log(`The perimeter is: ${(b+h)*2}cm`);
    }
}

// invocazione metodi e parametri NomeClasse.parametro, NomeClasse.metodo()
Rectangle.nSquares;
Rectangle.getArea(10, 4);
Rectangle.getPer(8, 2);