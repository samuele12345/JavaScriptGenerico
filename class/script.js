// node class\script.js
// modo più pulito di creare e utilizzare oggetti rispetto a semplici constructor
// functions

class Product{
    constructor(name, price, quantity, nearestStore){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.nearestStore = nearestStore;
    }
    
    // non serve scrivere function
    print(){
        console.log(`The product ${this.name} cost $${this.price}`);
        console.log(`${this.quantity} pieces are stored in the ${this.nearestStore} store`);
    }

    totalProdValue(numProd){
        console.log(`Valore totoale di ${numProd} ${this.name}: $${numProd*this.price}`)
    }
}

const prod = new Product("t-shirt", 14.5, 36, "San Diego");

prod.print();

prod.totalProdValue(21);
