// const searchSelector = document.querySelector("#search_buscar")

// searchSelector.addEventListener("keyup", event=>captureText(event));

// function captureText(event){
//     let captura = event.target.value.toLowerCase();
//     let filtrar = laptops.filter(laptop => laptop.titulo.toLowerCase().includes(captura));
//     console.log(event);
//     console.log(event.key);
//     console.log("capturado");
// }

const searchSelector = document.querySelector("#search_buscar");

searchSelector.addEventListener("keyup", event => captureText(event));

function captureText(event) {
    let captura = event.target.value.toLowerCase();
    filtrarProductos(captura);
}

function filtrarProductos(texto) {
    const productosFiltrados = laptops.filter(producto => producto.titulo.toLowerCase().includes(texto));
    renderizarProductos(productosFiltrados);
}

function renderizarProductos(productos) {
    let productsTemplate = "";
    for (const producto of productos) {
        productsTemplate += createCard(producto);
    }
    productsSelector.innerHTML = productsTemplate;
}
