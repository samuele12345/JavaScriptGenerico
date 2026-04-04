// Error è un oggetto che viene creato per rappresentare un problema senza
// interrompere l'esecuzione del programma

try{ // contiene il codice da controllare
    const dividendo = Number(window.prompt("inserire il dividendo"));
    const divisore = Number(window.prompt("inserire il divisore"));

    if(divisore === 0){
        // viene creato un errore particolare che poi viene intercettato
        // da catch
        throw new Error("non puoi dividere per zero!"); 
    }
    if(isNaN(dividendo) || isNaN(divisore)){
        throw new Error("devi inserire dei numeri!");
    }

    const result = dividendo / divisore;
    console.log(result);
}catch(error){ // intercetta un errore
    console.log(error);
}finally{ // viene eseguito sia se venga trovato un errore oppure no
    console.log("eseguito in ogni caso")
}