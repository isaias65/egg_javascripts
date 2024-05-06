const productosContainer = document.getElementById("cartproducts");
const productos = JSON.parse(localStorage.getItem("cart")) || [];
//para mostrar todos los productos de los carritos

productosContainer.innerHTML = "";

for (const producto of productos) {
    const productoElemento = document.createElement("article");
    productoElemento.setAttribute("class", "product-card"); // Añade la clase product-card para mantener el estilo

    productoElemento.innerHTML = `
        <a href="#">
            <div class="product-img">
                <img src="${producto.image}" alt="${producto.title}" />
            </div>
            <div class="product-info">
                <span class="product-title">${producto.title}</span>
                <span class="product-description">${producto.color}</span>
                <input type="number" name="quantity" min="1" id="${producto.id}" onchange="changeQuantity(event)" value="${producto.quantity}">
            </div>
            <div class="product-price-block">
                <span class="price">$${producto.price}</span>
            </div>
        </a>
    `;
    
    productosContainer.appendChild(productoElemento); // Agrega el producto al contenedor principal
}

// Función para actualizar el total a pagar
// function updateTotal() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let total = 0;

//     for (const product of cart) {
//         total += parseFloat(product.price);
//     }

//     document.getElementById("total").querySelector(".cart-price").textContent = `$${total.toFixed(2)}`;
// }

// for (const producto of productos) {
//     productosContainer.innerHTML += `
        
//             <a href="#">
//                 <div class="product-img">
//                     <img src="${producto.image}" alt="${producto.title}" />
//                 </div>
//                 <div class="product-info">
//                     <span class="product-title">${producto.title}</span>
//                     <span class="product-description">${producto.color}</span>
//                     <input type="number" name="quantity" min="1" id="${producto.id}" onchange="changeQuantity(event)" value=${producto.quantity}>
//                 </div>
//                 <div class="product-price-block">
//                     <span class="price">$${producto.price}</span>
//                 </div>
//             </a>
        
//     `;
// }