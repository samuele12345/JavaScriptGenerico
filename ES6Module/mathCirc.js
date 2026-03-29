// Modulo di esportazione con costanti e funzioni matematiche per calcoli relativi 
// a una circonferenza
// Esporta: PI (costante), getPer (perimetro), getAr (area), getVol (volume sfera)

// fondamentale scrivere export per l'esportazione
export const PI = 3.14;

export function getPer(radius){
    return 2 * PI * radius;
}

export function getAr(radius){
    return PI * Math.pow(radius, 2);
}

export function getVol(radius){
    return (4/3) * PI * Math.pow(radius, 3) ;
}