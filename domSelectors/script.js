// selezione elementi DOM
// questo script va eseguito in un browser, non con node
// obiettivo: capire cosa restituiscono i vari metodi di selezione
// e cosa cambia davvero tra collezioni live e statiche


if (typeof document === "undefined") {
    console.log("Apri questo script in una pagina HTML o nella console del browser per provare gli esempi sul DOM.");
} else {
    document.body.innerHTML = `
        <main id="demo-dom-selectors">
            <h1 id="titolo">Esempio selettori DOM</h1>
            <p class="descrizione">Primo paragrafo</p>
            <p class="descrizione evidenza">Secondo paragrafo</p>
            <div class="box">Box 1</div>
            <div class="box active">Box 2</div>
            <section>
                <span class="nota">Nota 1</span>
                <span class="nota">Nota 2</span>
            </section>
        </main>
    `;

    // getElementById:
    // prende un solo elemento tramite id
    // e' molto diretto quando sai gia' che esiste un id unico
    const titolo = document.getElementById("titolo");
    console.log("getElementById('titolo'):", titolo);
    console.log("testo titolo:", titolo.textContent);

    // getElementsByClassName:
    // restituisce una HTMLCollection live
    // live significa che questa variabile non contiene una fotografia fissa,
    // ma una collezione collegata al DOM reale
    // se aggiungi o rimuovi elementi con quella classe, length e contenuto cambiano da soli
    const boxByClass = document.getElementsByClassName("box");
    console.log("getElementsByClassName('box'):", boxByClass);
    console.log("numero box iniziali:", boxByClass.length);

    // getElementsByTagName:
    // restituisce anche questo una HTMLCollection live
    // utile se vuoi tutti gli elementi di un certo tag, ad esempio tutti i p o tutti i li
    // anche qui la collezione si aggiorna automaticamente se il DOM cambia
    const paragrafiByTag = document.getElementsByTagName("p");
    console.log("getElementsByTagName('p'):", paragrafiByTag);
    console.log("numero paragrafi iniziali:", paragrafiByTag.length);

    // querySelector:
    // restituisce il primo elemento che matcha un selettore CSS
    // e' spesso il piu' comodo perche' usa la stessa logica dei selettori CSS
    const primaBoxActive = document.querySelector(".box.active");
    console.log("querySelector('.box.active'):", primaBoxActive);

    // querySelectorAll:
    // restituisce una NodeList statica
    // statica significa che fa una fotografia del DOM in quel momento
    // se dopo aggiungi altri elementi, questa lista non si aggiorna da sola
    // per vedere i nuovi elementi devi rifare querySelectorAll
    const noteStatiche = document.querySelectorAll(".nota");
    console.log("querySelectorAll('.nota'):", noteStatiche);
    console.log("numero note iniziali:", noteStatiche.length);

    // insertAdjacentHTML non dipende da come hai selezionato l'elemento
    // e' un metodo dell'elemento stesso
    // quindi puoi usarlo anche su un elemento ottenuto con querySelector
    const demo = document.querySelector("#demo-dom-selectors");

    demo.insertAdjacentHTML(
        "beforeend",
        `
            <div class="box">Box 3 aggiunta dopo</div>
            <p>Terzo paragrafo aggiunto dopo</p>
            <span class="nota">Nota 3 aggiunta dopo</span>
        `
    );

    // qui si vede la differenza pratica:
    // - le collezioni live si aggiornano da sole
    // - la NodeList statica resta ferma alla situazione iniziale
    // in pratica, senza riscrivere boxByClass o paragrafiByTag,
    // il loro contenuto cambia perche' sono collegati al DOM attuale
    console.log("dopo la modifica del DOM:");
    console.log("boxByClass.length:", boxByClass.length);
    console.log("paragrafiByTag.length:", paragrafiByTag.length);
    console.log("noteStatiche.length:", noteStatiche.length);

    // per aggiornare una NodeList statica bisogna rifare la query
    const noteAggiornate = document.querySelectorAll(".nota");
    console.log("noteAggiornate.length:", noteAggiornate.length);

    // in pratica:
    // - live: comoda se il DOM cambia e vuoi vedere sempre il contenuto aggiornato
    // - live: utile ad esempio se conti elementi che possono essere aggiunti o rimossi dinamicamente
    // - statica: piu' prevedibile, perche' non cambia sotto i tuoi occhi mentre il codice gira
    // - statica: utile se vuoi lavorare su una lista fissa senza sorprese durante un loop
    // oggi spesso si preferisce querySelector/querySelectorAll per la flessibilita' dei selettori CSS
    // ma non sono "migliori" in assoluto: dipende da cosa ti serve

    // riepilogo rapido
    console.log("RIEPILOGO");
    console.log("getElementById -> un solo elemento tramite id");
    console.log("getElementsByClassName -> HTMLCollection live");
    console.log("getElementsByTagName -> HTMLCollection live");
    console.log("querySelector -> primo elemento che matcha un selettore CSS");
    console.log("querySelectorAll -> NodeList statica");
    console.log("insertAdjacentHTML -> metodo di un elemento, funziona anche su un elemento preso con querySelector");
}