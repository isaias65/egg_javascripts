const titleFormat = (mensaje) =>{
    let mayus = mensaje.charAt(0);
    let minus = mensaje.slice(1, mensaje.length);

    return `${mayus.toUpperCase()}${minus.toLowerCase()}`
}

console.log(titleFormat("hello world")); 
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"))