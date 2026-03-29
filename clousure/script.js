// node clousure\script.js
//la clousure consiste nel mantenere una funzione padre e delle funzioni figlie a
// essa interne, questo permette di mantenere variabili private, non accessibili
// all'esterno della funzione padre se non tramite funzioni passate come proprietà
// di un oggetto

function contoBancario(){
    let cifra = 0;

    function versamento(vers){
        cifra += vers;
        console.log(`Hai versato ${vers}$`)
    }

    function prelievo(vers){
        cifra -= vers;
        console.log(`Hai prelevato ${vers}$`)
    }

    function getCifra(){
        return cifra;
    }

    // le funzioni interne vengono ritornate come un oggetto, potendo essere 
    // usate all'esterno
    return {versamento, prelievo, getCifra}
}

const contB = new contoBancario();

contB.versamento(1400);
contB.prelievo(325);
console.log(`Estratto conto: ${contB.getCifra()}$`);