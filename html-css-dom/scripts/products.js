class Product {
    constructor(id, titulo, descripcion, precio, oferta, images, impuesto) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.oferta = oferta;
    this.images = images;
    this.impuesto = impuesto;
    }     
}

const laptops  = [
    new Product(
        "LAP360",
        "Laptop HP Pavilion x360", "Convertible 2 en 1 con pantalla táctil","$849.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "LAP13",
        "Laptop Dell XPS 13",
        "Ultrabook con pantalla InfinityEdge",
        "$1299.99",
        "50% off",
        "./assets/mock2.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "LAP1",
        "Laptop Lenovo ThinkPad X1 Carbon",
        "Portátil empresarial ultraligero",
        "$1599.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "LAPDuo",
        "Laptop Asus ZenBook Duo",
        "Portátil con pantalla secundaria ScreenPad Plus",
        "$1499.99",
        "50% off",
        "./assets/mock2.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "LAP5",
        "Laptop Acer Swift 5",
        "Ultrabook ligero con procesador Intel Core i7",
        "$999.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "LAPAPPLE",
        "Laptop Apple MacBook Pro",
        "Portátil potente para profesionales creativos",
        "$1799.99",
        "50% off",
        "./assets/mock2.jpg",
        "Incluye impuesto País y percepción AFIP"
    )
];

const productsSelector = document.getElementById("products");

function createCard(product) {
    return `
    <article class="product-card">
        <a href="./details.html?id=${product.id}">
            <img class="product-img" src="${product.images}" alt="${product.titulo}" />
            <div class="product-info">
                <span class="product-title">${product.titulo}</span>
                <span class="product-description">${product.descripcion}</span>
                <div class="product-price-block">
                    <span class="price">${product.precio}</span>
                    <span class="discount">${product.oferta}</span>
                </div>
                <div class="product-tax-policy">${product.impuesto}</div>
            </div>
        </a>
    </article>
    `;
}

let productsTemplate = "";

for (const product of laptops) {
    productsTemplate += createCard(product);
}

productsSelector.innerHTML = productsTemplate;
