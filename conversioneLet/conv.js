/*node conversioneLet\conv.js
per eseguire nel terminale
*/

/*let x = "f"; convertendolo in Number e stampando da stampa "NaN" perchè
non è convertibile */
let x = "17";
let y= "stringa";
let z = "true";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));