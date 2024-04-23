const navSelector = document.getElementById("nav");

const options = [
    { title: "Ofertas", linkTo: "./outlet.html" },
    { title: "Como comprar", linkTo: "./how.html" },
    { title: "Costo y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of options) {
    const list = document.createElement("li");
    const anchor = document.createElement("a");

    //  anchor.className = "nav-button" // aignar una nueva class

    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    list.appendChild(anchor); //quien encierra a quien li encierra a
    navSelector.appendChild(list);// nav encierra li
}

