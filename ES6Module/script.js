// node ES6Module\script.js

// importazione delle funzioni mathCirc.js, presente nella stessa cartella
// di questo script.js
import {PI, getPer, getAr, getVol} from './mathCirc.js'

const rad = 5;
console.log(`Valore di PI: ${PI}`);
const per = getPer(rad);
console.log(`Il perimetro della circonferenza con raggio ${rad} è ${per.toFixed(2)}`)
const ar = getAr(rad);
console.log(`L'area della circonferenza con raggio ${rad} è ${ar.toFixed(2)}`)
const vol = getVol(rad);
console.log(`Il volume della sfera con raggio ${rad} è ${vol.toFixed(2)}`)