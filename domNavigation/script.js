// navigazione nel DOM
// questo script va eseguito in un browser, non con node
// obiettivo: capire come muoversi tra parent, children e siblings

if (typeof document === "undefined") {
    console.log("Apri questo script in una pagina HTML o nella console del browser per provare gli esempi sul DOM.");
} else {
    document.body.innerHTML = `
        <main id="demo-dom-navigation">
            <h1>DOM Navigation</h1>
            <p>
                Questo esempio mostra come usare firstElementChild, lastElementChild,
                nextElementSibling, previousElementSibling, parentElement e children.
            </p>

            <section class="card">
                <h2>Menu</h2>
                <ul class="menu-list">
                    <li class="menu-item">Home</li>
                    <li class="menu-item selected">Prodotti</li>
                    <li class="menu-item">Contatti</li>
                </ul>
            </section>

            <section class="card">
                <h2>Cards</h2>
                <div class="cards-wrapper">
                    <article class="box-card">Card A</article>
                    <article class="box-card active">Card B</article>
                    <article class="box-card">Card C</article>
                </div>
            </section>
        </main>
    `;

    const menuList = document.querySelector(".menu-list");
    const selectedItem = document.querySelector(".menu-item.selected");
    const cardsWrapper = document.querySelector(".cards-wrapper");
    const activeCard = document.querySelector(".box-card.active");

    // firstElementChild e lastElementChild
    // servono quando hai gia' un contenitore e vuoi il primo o l'ultimo figlio elemento
    // esempio tipico: prendere il primo li di una lista o l'ultima card di una griglia
    console.log("firstElementChild della lista:", menuList.firstElementChild);
    console.log("lastElementChild della lista:", menuList.lastElementChild);
    console.log("testo primo elemento:", menuList.firstElementChild.textContent);
    console.log("testo ultimo elemento:", menuList.lastElementChild.textContent);

    // nextElementSibling e previousElementSibling
    // servono quando parti da un elemento noto e vuoi muoverti lateralmente
    // esempio: hai la card attiva e vuoi quella prima o quella dopo
    console.log("elemento selezionato:", selectedItem);
    console.log("nextElementSibling:", selectedItem.nextElementSibling);
    console.log("previousElementSibling:", selectedItem.previousElementSibling);

    console.log("card attiva:", activeCard);
    console.log("card precedente:", activeCard.previousElementSibling);
    console.log("card successiva:", activeCard.nextElementSibling);

    // parentElement
    // utile quando conosci un elemento interno e vuoi risalire al suo contenitore diretto
    // ad esempio un bottone dentro una card, un li dentro una ul, una cella dentro una riga
    console.log("parentElement della voce selezionata:", selectedItem.parentElement);
    console.log("parentElement della card attiva:", activeCard.parentElement);

    // children
    // restituisce una HTMLCollection con tutti i figli elemento del parent
    // utile quando vuoi lavorare su un blocco gia' noto senza rifare una query globale
    console.log("children di cardsWrapper:", cardsWrapper.children);
    console.log("numero card:", cardsWrapper.children.length);

    // children non e' un array vero
    // se ti servono metodi come map, filter o forEach in modo prevedibile,
    // puoi trasformare la collezione in array
    const cardsArray = Array.from(cardsWrapper.children);
    console.log("cardsArray:", cardsArray);
    console.log(
        "testi delle card con map:",
        cardsArray.map((card) => card.textContent)
    );

    // quando conviene la navigazione DOM invece di querySelectorAll + array?
    // 1. se hai gia' un riferimento a un elemento, evitare una nuova query e' spesso piu' chiaro
    // 2. se devi muoverti rispetto alla posizione attuale, sibling e parent sono piu' espressivi
    // 3. se lavori dentro un contenitore specifico, children evita selezioni troppo generiche
    // 4. se devi fare operazioni di collezione, convertire in array ha piu' senso
    console.log("QUANDO USARLI");
    console.log("firstElementChild / lastElementChild -> primo o ultimo figlio di un contenitore gia' noto");
    console.log("nextElementSibling / previousElementSibling -> spostamento laterale rispetto a un elemento gia' trovato");
    console.log("parentElement -> risalire dal figlio al contenitore diretto");
    console.log("children -> ottenere tutti i figli elemento di un parent specifico");

    // conclusione pratica
    // trasformare una lista in array e' utilissimo quando devi iterare, filtrare o mappare
    // ma non sostituisce del tutto la navigazione DOM
    // la navigazione e' utile quando il problema e' relazionale:
    // "dammi il parent", "dammi il prossimo fratello", "dammi il primo figlio"
    console.log("CONCLUSIONE");
    console.log("Se devi fare elaborazioni su una lista, Array.from(...) e' ottimo.");
    console.log("Se devi muoverti nel DOM rispetto a un nodo gia' noto, le proprieta' di navigazione sono spesso la scelta piu' diretta.");
}