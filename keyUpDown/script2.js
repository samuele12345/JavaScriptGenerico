// Elementi della pagina da controllare.
// `ball` e' il cerchio che si muove, `title` e' il testo mostrato al centro.
// Logica generale del programma:
// 1. Selezioniamo la sfera e il testo mostrato al centro.
// 2. Manteniamo in memoria quali frecce sono premute in questo istante.
// 3. A ogni frame controlliamo lo stato dei tasti e aggiorniamo `x` e `y`.
// 4. Blocchiamo il movimento entro i limiti disponibili nel viewport.
// 5. Applichiamo le coordinate finali a `left` e `bottom`, ottenendo anche
//    movimenti diagonali quando due frecce restano premute insieme.
const ball = document.querySelector("#sfera");
const title = document.querySelector("#tit-1");

// Velocita' del movimento in pixel per ogni frame di aggiornamento.
const movement = 5;

// Stato dei tasti direzionali.
// Invece di reagire a un solo evento keydown alla volta, salviamo quali tasti
// sono attualmente premuti. Questo permette combinazioni come:
// ArrowUp + ArrowRight => movimento diagonale verso alto-destra.
const pressedKeys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};

// Coordinate correnti rispetto alla posizione iniziale, che e' il centro della pagina.
// `x` gestisce lo spostamento orizzontale, `y` quello verticale.
let x = 0;
let y = 0;

function getLimits() {
    // A ogni aggiornamento ricalcoliamo i limiti disponibili.
    // Questo rende il codice piu' robusto se la finestra cambia dimensione.
    // Il limite massimo corrisponde a meta' dello spazio libero tra viewport e sfera.
    const maxX = (document.body.clientWidth - ball.clientWidth) / 2;
    const maxY = (document.body.clientHeight - ball.clientHeight) / 2;

    return { maxX, maxY };
}

function updatePosition() {
    // Leggiamo i limiti correnti prima di aggiornare le coordinate.
    const { maxX, maxY } = getLimits();

    // Se la freccia su e' premuta, aumentiamo `y`.
    // `Math.min` blocca il valore al limite superiore senza bisogno di un if separato.
    if (pressedKeys.ArrowUp) {
        y = Math.min(y + movement, maxY);
    }

    // Se la freccia giu' e' premuta, riduciamo `y` fino al limite inferiore.
    if (pressedKeys.ArrowDown) {
        y = Math.max(y - movement, -maxY);
    }

    // Movimento verso destra: aumentiamo `x` senza superare il bordo destro.
    if (pressedKeys.ArrowRight) {
        x = Math.min(x + movement, maxX);
    }

    // Movimento verso sinistra: diminuiamo `x` senza superare il bordo sinistro.
    if (pressedKeys.ArrowLeft) {
        x = Math.max(x - movement, -maxX);
    }

    // Applichiamo i valori finali allo stile.
    // Dal momento che piu' condizioni possono essere vere nello stesso frame,
    // se ad esempio sono premuti su e destra, la sfera si muove in diagonale.
    ball.style.left = `${x}px`;
    ball.style.bottom = `${y}px`;

    // Richiama la stessa funzione al frame successivo.
    // Questo crea un ciclo di aggiornamento continuo molto adatto al movimento.
    requestAnimationFrame(updatePosition);
}

document.addEventListener("keydown", event => {
    // `Object.hasOwn(pressedKeys, event.key)` controlla se la proprieta' esiste
    // direttamente dentro `pressedKeys`.
    // Qui serve per filtrare solo le quattro frecce ed evitare che tasti come
    // "a", "Enter" o "Shift" vengano trattati come direzioni valide.
    // Se la proprieta' non esiste, il programma esce subito da questo handler.
    if (!Object.hasOwn(pressedKeys, event.key)) {
        return;
    }

    // Evita il comportamento standard del browser sulle frecce.
    event.preventDefault();

    // Memorizziamo che questo tasto e' attualmente premuto.
    pressedKeys[event.key] = true;

    // Aggiorniamo il testo solo come feedback visivo.
    title.textContent = "Moving...";
});

document.addEventListener("keyup", event => {
    // Anche al rilascio riusiamo lo stesso controllo con `hasOwn`.
    // In questo modo modifichiamo lo stato solo dei tasti che fanno parte
    // dell'oggetto `pressedKeys`.
    if (!Object.hasOwn(pressedKeys, event.key)) {
        return;
    }

    // Segniamo il tasto come non piu' premuto.
    pressedKeys[event.key] = false;

    // Se nessuna freccia e' ancora attiva, torniamo al testo iniziale.
    if (!Object.values(pressedKeys).some(Boolean)) {
        title.textContent = "Move Me!";
    }
});

// Avviamo subito il loop di aggiornamento.
// Anche se all'inizio nessun tasto e' premuto, il frame loop rimane pronto
// a reagire non appena cambia lo stato di `pressedKeys`.
updatePosition();