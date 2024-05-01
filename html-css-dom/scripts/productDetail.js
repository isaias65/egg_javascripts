class Product {
    constructor(id, titulo, descripcion, precio, oferta, images, impuesto,  colors) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.oferta = oferta;
    this.images = images;
    this.impuesto = impuesto;
    this.colors = colors;
    }     
}

const laptops  = [
    new Product(
        "LAP360",
        "Laptop HP Pavilion x360", "Convertible 2 en 1 con pantalla táctil",849.99,
        "50% off",
        ["./assets/mock1.jpg","./assets/mock2.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Azul", "Amarillo","Gris","Negro","Blanco"]
    ),
    new Product(
        "LAP13",
        "Laptop Dell XPS 13",
        "Ultrabook con pantalla InfinityEdge",
        1299.99,
        "50% off",
        ["./assets/mock2.jpg","./assets/mock1.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Amarillo","Gris","Negro","Blanco"]
    ),
    new Product(
        "LAP1",
        "Laptop Lenovo ThinkPad X1 Carbon",
        "Portátil empresarial ultraligero",
        1599.99,
        "50% off",
        ["./assets/mock1.jpg","./assets/mock2.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Azul","Negro","Blanco"]
    ),
    new Product(
        "LAPDuo",
        "Laptop Asus ZenBook Duo",
        "Portátil con pantalla secundaria ScreenPad Plus",
        1499.99,
        "50% off",
        ["./assets/mock2.jpg","./assets/mock1.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Negro","Blanco"]
    ),
    new Product(
        "LAP5",
        "Laptop Acer Swift 5",
        "Ultrabook ligero con procesador Intel Core i7",
        999.99,
        "50% off",
        ["./assets/mock1.jpg","./assets/mock2.jpg","./assets/mock2.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Azul", "Amarillo","Gris","Negro","Blanco"]
    ),
    new Product(
        "LAPAPPLE",
        "Laptop Apple MacBook Pro",
        "Portátil potente para profesionales creativos",
        1799.99,
        "50% off",
        ["./assets/mock2.jpg","./assets/mock1.jpg"],
        "Incluye impuesto País y percepción AFIP",
        ["Azul", "Amarillo","Gris","Negro","Blanco"]
    )
];




    //      <div class="product-imagenes-block">
    //     ${product.images.map((image) => `
    //         <div class="thumbnail-container">
    //             <img src="${image}" alt="Descripción de la imagen" onclick="cambioImagen('${image}')"/>
    //         </div>
    //     `).join("")}
    //     <img class="main-image" src="${product.images[0]}" alt="" id="bigImg">
    // </div>

//obtener del buscador el id 
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    const product = laptops.find((each) => each.id === id);
    const detailsTemplate = `
    <div class="product-imagenes-block">
        ${product.images.map(each => `
        <div class="thumbnail-container">
            <img src="${each}" alt="mini" onclick="changeMini(event)"/>
        </div>
        `).join("")}
        <img class="main-image" src="${product.images[0]}" alt="" id="bigImg">
    </div>
    <div class="product-description-block">
        <h1 class="titulo">${product.titulo}</h1>
        <form action="#" class="selector">
            <fieldset>
                <label class="label">Color</label>
                <select type="text" placeholder="Selecciona un color" id="color-">
                    ${product.colors.map(
                    (each) => `<option value=${each}>${each}</option>`
                    ).join("")}
                </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>${product.titulo}</h1>
            <p>${product.descripcion}</p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="chackout-total-label">Total:</span>
            <h2 class="checkout-total-price" id="price">$${product.precio}</h2>
            <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
                haciendo la solicitud en AFIP.
            </p>
            <ul class="checkout-policy-list">
                <li>
                    <span class="policy-icon">
                        <img src="./assets/truck.png" alt="">
                    </span>
                    <span class="policy-desc">
                        Agrega el producto al carrito para conocer los costos de envio
                    </span>
                </li>
                <li>
                    <span class="policy-icon">
                        <img src="./assets/plane.png" alt="">
                    </span>
                    <span class="policy-desc">
                        Recibí aproximadamente entre 10 y 15 días hábiles,
                        seleccionando envío normal
                    </span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" value="1" min="1" id="quantity-" onclick="changePrice(event)"/>
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline" onclick="saveProduct('${id}')">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    </div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}

function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#bigImg");
    bigSelector.src = selectedSrc;
}

function changePrice(event){
    const quantity = event.target.value;
    const product = laptops.find(product => product.id == id);
    const priceSelector = document.querySelector("#price");
    priceSelector.innerHTML = `$${quantity * product.precio}`;
}

function saveProduct(id) {
    const found = laptops.find((each) => each.id === id);
    const product = {
        id: id,
        title: found.titulo,
        price: found.precio,
        image: found.images[0],
        color: document.querySelector("#color-").value,
        quantity: document.querySelector("#quantity-").value,
        // color: document.querySelector("#color-" + id).value,
        // quantity: document.querySelector("#quantity-" + id).value,
    };
    // const stringifyProduct = JSON.stringify(product);
    // localStorage.setItem("cart", stringifyProduct);
    
    // Para la primera vez se necesita indicar q si no existe q sea un array vacio
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
}
    

printDetails(id)
    