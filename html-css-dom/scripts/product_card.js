class Product {
    constructor(titulo, descripcion, precio, oferta, images, impuesto) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.oferta = oferta;
    this.images = images;
    this.impuesto = impuesto;
    }     
}

const laptops = [
    new Product(
        "Laptop HP Pavilion x360", "Convertible 2 en 1 con pantalla táctil","$849.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "Laptop Dell XPS 13",
        "Ultrabook con pantalla InfinityEdge",
        "$1299.99",
        "50% off",
        "./assets/mock2.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "Laptop Lenovo ThinkPad X1 Carbon",
        "Portátil empresarial ultraligero",
        "$1599.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "Laptop Asus ZenBook Duo",
        "Portátil con pantalla secundaria ScreenPad Plus",
        "$1499.99",
        "50% off",
        "./assets/mock2.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
        "Laptop Acer Swift 5",
        "Ultrabook ligero con procesador Intel Core i7",
        "$999.99",
        "50% off",
        "./assets/mock1.jpg",
        "Incluye impuesto País y percepción AFIP"
    ),
    new Product(
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
        <a href="./details.html">
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

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate += createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(laptops, "products");