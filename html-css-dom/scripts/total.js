const containerresumen = document.getElementById("total");
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtener el carrito del almacenamiento local

function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(
      (each) => (total = total + each.price * each.quantity)
    );
    return `
    <div class="container-resumen-cart">
        <div class="cart-title">
            <span>Resumen del pedido</span>
        </div>
        <div class="container-cart-price">
            <span class="cart-price">Subtotal</span>
            <span class="cart-price">$${total}</span>
        </div>
        <div class="container-cart-policy">
            Incluye impuesto PAIS y percepción AFIP
        </div>
        <div class="container-buton">
            <button type="submit"> Finaliza tu compra</button>
        </div>
    </div>
    `;
}

// Llamar a la función createTotalTemplate con el carrito como argumento
const totalTemplate = createTotalTemplate(cart);

// Agregar el totalTemplate al contenedor
containerresumen.innerHTML = totalTemplate;
