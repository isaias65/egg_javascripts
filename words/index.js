const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;

const mensajecantidad = "la frase es: "+ frase + "\nCantidad de palabra es: " +cantidad;

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minmay = fraseMinusculas + "\t" +fraseMayusculas;
console.log(minmay);

alert(mensajecantidad);


