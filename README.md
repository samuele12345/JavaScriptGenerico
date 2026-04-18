# JavaScript - Theory and Notes

## Italiano

Questa cartella contiene appunti ed esercizi di teoria JavaScript, organizzati per argomento. Ispirato dal corso di *Bro Code* su YouTube.

L'obiettivo e raccogliere esempi piccoli e progressivi per capire meglio la sintassi e i concetti base/intermedi del linguaggio.

### Argomenti presenti

- appunti: note rapide e promemoria
- array: operazioni base su array
- arrowFunctions: funzioni freccia
- callBack: uso delle callback
- class: classi in JavaScript
- classList: uso pratico di classList (add/remove/toggle/replace/contains) con DOM
- conversioneLet: conversione tra tipi primitivi
- costruttore: funzioni costruttore
- date: gestione di date e orari
- destructoring: destrutturazione di array e oggetti
- domNavigation: navigazione del DOM tra parent, children e siblings
- domSelectors: selezione degli elementi DOM con getElement e querySelector
- filter: metodo filter
- forEach: metodo forEach
- functionExpression: function expression
- getterSetter: getter e setter
- inheritance: ereditarieta tra classi
- keyUpDown: movimento di un elemento con tastiera, limiti dinamici e diagonali
- map: metodo map
- math: oggetto Math e funzioni principali
- nestedObject: oggetti annidati
- objArray: array di oggetti
- objects: gestione oggetti
- reduce: metodo reduce
- restParameters: rest parameters
- spreadOperator: spread operator
- static: membri statici
- strings: metodi utili per le stringhe
- super: uso di super
- this: keyword this

Quasi ogni sottocartella contiene uno script indipendente eseguibile con Node.js.
Le cartelle che lavorano con il DOM del browser, come domSelectors, vanno invece provate in una pagina HTML o nella console del browser.

### Nota su classList

La cartella classList contiene un mini esempio DOM con bottone e titolo.

- click sul bottone: ciclo dei colori (blue, green, red) e aggiornamento del testo del titolo
- hover/mouseout: applicazione/rimozione di stato visuale tramite classe e stile inline
- obiettivo: esercitarsi con i metodi classList in un caso reale e immediato

### Nota su keyUpDown

La cartella keyUpDown contiene esempi di movimento DOM controllato da tastiera.

- script.js: versione base, con movimento a step singoli per ogni keydown
- script2.js: versione evoluta, con stato dei tasti premuti, aggiornamento continuo tramite requestAnimationFrame e movimento diagonale

Questi file sono pensati per essere eseguiti nel browser insieme a index.html e styles.css.

## English

This folder contains JavaScript theory notes and exercises, organized by topic. Inspired by *Bro Code*'s YouTube course.

The goal is to collect small, progressive examples to better understand JavaScript syntax and core/intermediate concepts.

### Available topics

- appunti: quick notes and reminders
- array: basic array operations
- arrowFunctions: arrow functions
- callBack: callback usage
- class: JavaScript classes
- classList: practical classList usage (add/remove/toggle/replace/contains) with the DOM
- conversioneLet: primitive type conversion
- costruttore: constructor functions
- date: date and time handling
- destructoring: array and object destructuring
- domNavigation: DOM navigation with parent, children, and sibling access
- domSelectors: DOM element selection with getElement methods and query selectors
- filter: filter method
- forEach: forEach method
- functionExpression: function expressions
- getterSetter: getters and setters
- inheritance: class inheritance
- keyUpDown: keyboard-driven element movement, dynamic bounds, and diagonal motion
- map: map method
- math: Math object and main functions
- nestedObject: nested objects
- objArray: array of objects
- objects: object handling
- reduce: reduce method
- restParameters: rest parameters
- spreadOperator: spread operator
- static: static members
- strings: useful string methods
- super: super keyword usage
- this: this keyword

Most subfolders contain an independent script that can be run with Node.js.
Folders that work with the browser DOM, such as domSelectors, should instead be tested in an HTML page or in the browser console.

### Note on classList

The classList folder contains a small DOM example with a button and title.

- button click: color cycle (blue, green, red) and title text update
- hover/mouseout: visual state applied/removed through class and inline style
- goal: practice classList methods in a simple real-world interaction

### Note on keyUpDown

The keyUpDown folder contains examples of keyboard-controlled DOM movement.

- script.js: basic version, with one movement step for each keydown event
- script2.js: extended version, with pressed-key state, continuous updates via requestAnimationFrame, and diagonal movement

These files are meant to run in the browser together with index.html and styles.css.