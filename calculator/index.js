// primer trabajo de sumatoria, promedio, triple y resta

// const numero1 = Number(prompt("Ingrese primer número"));
// const numero2 = Number(prompt("Ingrese segundo número"));

// const suma = numero1 + numero2;
// const mensajesuma = "El resultado de la suma es " + suma;

// const promedio = suma / 2;
// const mensajepromedio = "El resultado del promedio es " + promedio;

// const triple = promedio * 3;
// const mensajetriple = "El resultado del triple del promedio es " + triple;

// const resultadoMenosDiez = triple - 10;
// const mensajediez = "El resultado del triple menos 10 es " + resultadoMenosDiez;

// const mensajefinal = mensajesuma + "\n" + mensajepromedio + "\n" + mensajetriple + "\n" + mensajediez;
// alert(mensajefinal);

// fin


// nuevo proyecto sumando varios numeros
let sumatoria = 0;
const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroAsumar;
}
console.log(sumatoria);  
