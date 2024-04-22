// proyecto de compras
// let totalApagar = 0;
// const cantidades = 3;
// let productos = [];
// for (let index = 1; index <= cantidades; index++) {
//     const nombre =prompt("¿Qué producto desea llevar?");
//     const cantidad = Number(prompt("¿Cuántas unidades?"));
//     const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;
//     // lo agrega en un array tipo objeto
//     productos.push({nombre: nombre, cantidad: cantidad, precio: precio, subtotal: subtotal});
// }

// console.log(totalApagar);
// console.log(productos);

// fin de proyecto

// proyecto calculo del total de compras diarias

const comprar = ()=> {
    let totalApagar = 0;
    for (let index = 1; index <= 3; index++)  {
        const nombre = prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        let subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;
    }
    console.log(totalApagar);
    return totalApagar;
}

// primera forma
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

// segunda forma
// const total = comprar() + comprar() + comprar();

console.log(total);    