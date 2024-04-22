const comprar = ()=> {
    let products = [];
    let totalApagar = 0;
    for (let index = 0; index <= 1; index++)  {
        const nombre = prompt("¿Qué producto desea llevar?");
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        let subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;

        products.push({nombre: nombre, cantidad: cantidad, precio: precio, subtotal: subtotal})
    }
    console.log(products);
    return totalApagar;
}

const total1 = comprar();
const total = total1;


console.log(total);
console.log("Esto es math absoluto" + Math.abs(total));