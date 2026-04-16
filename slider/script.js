// Riferimenti agli elementi principali della pagina.
// Ogni costante punta a un nodo del DOM che verrà usato nei tre esempi di slider.
const slider = document.querySelector(".slider1")
const slider2 = document.querySelector("#slider2")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
const slides3 = document.querySelectorAll(".slides3 img");
const pProp = document.querySelector("#p-property")

// Array con i link di attribuzione delle immagini del carosello superiore.
// L'indice dell'array corrisponde all'indice della slide visibile.
const imgLink = [
    '<a href="https://it.freepik.com/foto-gratuito/vista-anteriore-donna-che-mangia-hamburger-di-carne_9593137.htm">Immagine di stockking su Freepik</a>',
    '<a href="https://it.freepik.com/foto-gratuito/vista-frontale-delizioso-cheeseburger-di-carne-con-patatine-fritte-su-sfondo-scuro-cena-hamburger-spuntino-fast-food-panino-insalata-piatto-toast_22292762.htm">Immagine di KamranAydinov su Freepik</a>',
    '<a href="https://it.freepik.com/foto-gratuito/tre-mini-hamburger-sul-tavolo_6285311.htm">Immagine di KamranAydinov su Freepik</a>'
]
/*
if(slider){

    // Limite massimo di scroll calcolato al load (riusabile se in futuro aggiungi altri ricalcoli).
    let maxScroll;
    // Collezione di tutte le card/slide dentro lo slider.
    const slides = slider.querySelectorAll(".slide1");

    // Evidenzia (scala, ingrandendo a scale(1.05)) una sola slide: quella piu vicina al 
    // centro visibile dello slider.
    const updateActiveSlide = () => {
        // Safety check: evita calcoli se non esistono slide.
        if(slides.length === 0){return;}

        // Rettangolo visibile del contenitore e suo centro orizzontale.
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + (sliderRect.width / 2);

        // Valori iniziali per trovare la slide col centro piu vicino.
        let activeSlide = slides[0];
        let minDistance = Infinity;

        // Per ogni slide calcoliamo la distanza tra il suo centro e il centro dello slider.
        slides.forEach((slide) => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + (slideRect.width / 2);
            const distance = Math.abs(sliderCenter - slideCenter);

            // Manteniamo la slide con distanza minima: sara l'unica attiva.
            if(distance < minDistance){
                minDistance = distance;
                activeSlide = slide;
            }
        });

        // Applichiamo lo scale solo alla slide attiva, reset alle altre.
        slides.forEach((slide) => {
            slide.style.transform = slide === activeSlide ? "scale(1.05)" : "scale(1)";
        });
    };

    // centratura slide centrale
    // Aspettiamo il load completo per avere misure affidabili (width, left, scrollWidth).
    window.addEventListener("load", () =>{
        // Query locale: prendiamo solo le slide dentro questo slider,
        // evitando elementi con la stessa classe in altre parti della pagina.
        const slides = slider.querySelectorAll(".slide1");
        // Se non ci sono slide, usciamo subito per evitare errori sul calcolo.
        if(slides.length === 0){return};

        // Selezioniamo la slide centrale: con numero dispari e davvero la centrale,
        // con numero pari viene scelta quella appena a destra del centro matematico.
        const middleSlide = slides[Math.floor(slides.length/2)];

        // getBoundingClientRect NON usa il contenitore come origine:
        // restituisce posizione e dimensioni rispetto alla viewport (finestra visibile).
        // Quindi sliderRect.left e una coordinata "globale" sullo schermo.
        const sliderRect = slider.getBoundingClientRect();

        // Anche la slide viene misurata rispetto alla viewport.
        // Facendo slideRect.left - sliderRect.left otteniamo una distanza "locale"
        // della slide dentro l'area visibile dello slider.
        // Questo approccio e piu robusto di offsetLeft in layout con gap/margini/maschere.
        const slideRect = middleSlide.getBoundingClientRect();

        // Offset target (valore di scrollLeft che vogliamo raggiungere):
        // 1) slideRect.left - sliderRect.left
        //    -> distanza tra inizio slider visibile e inizio slide visibile.
        //       praticamente la differenza tra 1. margine tra bordo sinistro della pagina
        //       e inizio slide centrale e 2. bordo sinistro pagina e inizio slider, 
        //       ottenendo la distanza tra inizio slider e inizio slide centrale
        // 2) + slider.scrollLeft
        //    -> conversione dalla parte "visibile" al sistema completo del contenuto scrollabile.
        //       In pratica otteniamo la posizione assoluta della slide dentro la track orizzontale.
        //       Nel tuo flusso iniziale (solo load) spesso vale 0 e non cambia il risultato.
        //       Diventa utile se il calcolo viene rifatto quando lo slider e gia spostato
        //       (es. resize, ricalcolo manuale, riapertura sezione in SPA):
        //       senza questo termine il target risulta traslato e il centro puo essere sbagliato.
        // 3) - ((slider.clientWidth - slideRect.width)/2)
        //    -> trasla il valore per portare il centro della slide al centro del viewport slider.
        //       Equivalente concettuale: centerSlide - centerViewport.
        const offset = (slideRect.left - sliderRect.left) // + slider.scrollLeft 
                    - ((slider.clientWidth - slideRect.width)/2);

        // maxScroll e il limite destro: oltre questo valore il browser non puo andare.
        // Formula: larghezza totale contenuto - larghezza area visibile.
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        // Clamp finale:
        // - se offset < 0   -> usa 0 (inizio)
        // - se offset > max -> usa maxScroll (fine)
        // - altrimenti      -> usa offset
        // Cosi evitiamo overscroll e manteniamo sempre un valore valido.
        slider.scrollLeft = Math.max(0, Math.min(offset, maxScroll));

        updateActiveSlide();
    });


    // Aggiorniamo la slide attiva mentre l'utente scorre.
    slider.addEventListener("scroll", updateActiveSlide);
}

*/


// =========================
// SLIDER 1: card orizzontali trascinabili
// =========================
// In questo blocco l'utente può trascinare lo slider con il mouse.
// Inoltre, la card più vicina al centro viene evidenziata visivamente.
if(slider){
    // Limite massimo di scorrimento orizzontale del contenitore.
    let maxScroll;

    // Elenco di tutte le card presenti nello slider.
    const slides = slider.querySelectorAll(".slide1");

    // Stato del drag:
    // - isDown: il mouse è premuto oppure no
    // - startX: coordinata iniziale del cursore sul piano orizzontale
    // - scrollLef: valore iniziale di scrollLeft salvato all'avvio del drag
    let isDown = false;
    let startX;
    let scrollLef;

    // Questa funzione controlla tutte le card e trova quella più vicina
    // al centro dello spazio visibile dello slider.
    const updateSlide = () =>{
        // Centro geometrico del contenitore visibile.
        const dimSlider = slider.getBoundingClientRect();
        const centerSlider = dimSlider.left + (dimSlider.width / 2);

        // Valori iniziali per il confronto.
        let activeSlide = slides[0];
        let minDistance = Infinity;

        slides.forEach(slide =>{
            // Centro geometrico della singola card.
            const dimSlide = slide.getBoundingClientRect();
            const centerSlide = dimSlide.left + (dimSlide.width / 2);

            // Distanza assoluta tra il centro della card e quello dello slider.
            const distance = Math.abs(centerSlider - centerSlide);

            if(distance < minDistance){
                minDistance = distance;
                activeSlide = slide;
            }
        });

        slides.forEach(slide => {
            slide.style.transform = slide === activeSlide ? "scale(1.05)" : "scale(1)";
        });
    }

    // Al caricamento iniziale lo slider viene posizionato in modo da mostrare
    // subito la card centrale, migliorando l'aspetto visivo di partenza.
    window.addEventListener("load", () =>{

        if(slides.length === 0){return}

        // Con Math.floor si prende la card centrale dell'insieme.
        const centerSlide = slides[Math.floor(slides.length/2)];

        const dimSlider = slider.getBoundingClientRect();
        const dimSlide = centerSlide.getBoundingClientRect();

        // Calcola lo scroll necessario per allineare il centro della card
        // con il centro del contenitore visibile.
        const offset = (dimSlide.left - dimSlider.left) + slider.scrollLeft - 
                        ((slider.clientWidth - dimSlide.width)/2);

        // Larghezza totale scrollabile meno la larghezza visibile.
        maxScroll = slider.scrollWidth - slider.clientWidth;

        // Clamp finale per non andare né troppo a sinistra né troppo a destra.
        slider.scrollLeft = Math.max(0, Math.min(offset, maxScroll));

        updateSlide();
    })

    // Quando il mouse viene premuto, parte il trascinamento:
    // memorizziamo posizione iniziale e scroll attuale.
    slider.addEventListener("mousedown", (e) =>{
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLef = slider.scrollLeft;
        slider.classList.add("grabbing");
    })

    // Il rilascio del mouse termina il drag.
    slider.addEventListener("mouseup", () =>{
        isDown = false;
        slider.classList.remove("grabbing");
    })

    // Se il cursore esce dallo slider mentre si trascina,
    // il drag viene interrotto per sicurezza.
    slider.addEventListener("mouseleave", () =>{
        isDown = false;
        slider.classList.remove("grabbing");
    })

    // Durante il movimento del mouse, se il drag è attivo,
    // aggiorniamo lo scorrimento in base allo spostamento orizzontale.
    slider.addEventListener("mousemove", (e) =>{
        if(!isDown){return}

        // Evita selezione di testo e altri effetti indesiderati durante il drag.
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        // Differenza tra posizione attuale e posizione iniziale del cursore.
        // Il moltiplicatore 1.2 rende il movimento un po' più rapido.
        const walk = (x - startX) * 1.2;

        slider.scrollLeft = scrollLef - walk;

        // Ogni volta che cambia lo scroll, ricalcoliamo la card attiva.
        updateSlide();
    })
    

    // Anche lo scroll manuale con touchpad o rotella deve aggiornare lo stato visivo.
    slider.addEventListener("scroll", updateSlide);
}

// =========================
// SLIDER 2: immagini con frecce laterali
// =========================
// Qui lo spostamento avviene per step: ogni click centra l'immagine successiva
// o precedente, mentre la slide attiva viene animata via CSS.
if(slider2){
    const slides2 = slider2.querySelectorAll(".slide2");
    let activeSlide2 = slides2[0];

    // Aggiorna lo stato grafico delle frecce in base alla slide attuale.
    const updateArrowState = () => {
        const currentIndex = Array.from(slides2).indexOf(activeSlide2);

        arrowLeft.classList.toggle("disabled", currentIndex === 0);
        arrowRight.classList.toggle("disabled", currentIndex === slides2.length - 1);
    };

    // Cerca la slide che si trova più vicina al centro del contenitore.
    // Questa verrà considerata come slide attiva.
    const updateCenter = () =>{
        if(slides2.length === 0){return;}

        const rectSlider2 = slider2.getBoundingClientRect();
        const centerSlider2 = rectSlider2.left + (rectSlider2.width / 2);

        activeSlide2 = slides2[0];
        let minDistance2 = Infinity;

        slides2.forEach(slide =>{
            const rectSlide2 = slide.getBoundingClientRect();
            const centerCurrentSlide2 = rectSlide2.left + (rectSlide2.width / 2);
            const distance2 = Math.abs(centerSlider2 - centerCurrentSlide2);

            if(distance2 < minDistance2){
                minDistance2 = distance2;
                activeSlide2 = slide;
            }
        });

        // controllo del funzionamento del sistema
        /*
        if(activeSlide2 === slides2[0]){
            console.log(`slide: 0`);
        }else if(activeSlide2 === slides2[1]){
            console.log(`slide: 1`);
        }else if(activeSlide2 === slides2[2]){
            console.log(`slide: 2`);
        }
        */

        slides2.forEach(slide => {
            slide.classList.toggle("activate", slide === activeSlide2);
        });

        updateArrowState();
    };

    // Riceve una slide specifica e calcola di quanto bisogna scrollare
    // per portarla esattamente al centro del contenitore visibile.
    const centerSlide = (slide) => {
        const slideRect = slide.getBoundingClientRect();
        const sliderRect = slider2.getBoundingClientRect();

        const offset = (slideRect.left - sliderRect.left) + slider2.scrollLeft -
                        ((slider2.clientWidth - slideRect.width) / 2);

        const maxScroll = slider2.scrollWidth - slider2.clientWidth;

        slider2.scrollLeft = Math.max(0, Math.min(offset, maxScroll));
    };

    // Click verso destra: centra la slide successiva, se esiste.
    arrowRight.addEventListener("click", () =>{
        updateCenter();

        const currentIndex = Array.from(slides2).indexOf(activeSlide2);

        if(currentIndex < slides2.length - 1){
            centerSlide(slides2[currentIndex + 1]);
        }
    });

    // Click verso sinistra: centra la slide precedente, se esiste.
    arrowLeft.addEventListener("click", () =>{
        updateCenter();

        const currentIndex = Array.from(slides2).indexOf(activeSlide2);

        if(currentIndex > 0){
            centerSlide(slides2[currentIndex - 1]);
        }
    });

    // Al load e durante lo scroll si aggiorna il riferimento alla slide attiva.
    window.addEventListener("load", updateCenter);
    slider2.addEventListener("scroll", updateCenter);
}

// =========================
// SLIDER 3: slideshow automatico/manuale
// =========================
// Questo carosello mostra una sola immagine alla volta.
// Può avanzare in automatico ogni 5 secondi oppure tramite i pulsanti laterali.
if(slides3){
    // slideIndex = indice dell'immagine corrente.
    // intervalId = id del timer per poterlo riavviare a ogni interazione.
    let slideIndex = 0;
    let intervalId = null;

    // Quando il DOM è pronto, inizializza il carosello.
    window.addEventListener("DOMContentLoaded", setDefaultSlide);

    // Mostra la prima immagine, avvia l'avanzamento automatico
    // e stampa il link di attribuzione corrispondente sotto lo slider.
    function setDefaultSlide(){
        slides3[slideIndex].classList.add("active");
        intervalId = setInterval(nextSlide, 5000);
        pProp.innerHTML = `${imgLink[0]}`;
    }

    // Rende attiva una sola immagine alla volta.
    // Se si supera l'ultima slide, si riparte dalla prima;
    // se si va prima della prima, si torna all'ultima.
    function currentSlide(index){
        if(index >= slides3.length){
            slideIndex = 0;
        }else if(index < 0){
            slideIndex = slides3.length -1;
        }

        slides3.forEach(slide =>{
            slide.classList.remove("active");
        });

        slides3[slideIndex].classList.add("active");
        pProp.innerHTML = `${imgLink[slideIndex]}`;
    }

    // Va alla slide precedente e riavvia il timer automatico,
    // così l'utente ha sempre 5 secondi pieni prima del cambio successivo.
    function prevSlide(){
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
        slideIndex --;
        currentSlide(slideIndex);
    }

    // Va alla slide successiva e resetta il timer automatico.
    function nextSlide(){
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
        slideIndex ++;
        currentSlide(slideIndex);
    }
}