const footerSelector = document.querySelector("#footer");
const pie_pagina = [
    { title:"Ofertas", opts: ["Laptops", "Audio", "Auticulares"] },
    { title:"Como comprar", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title:"Costo y tarifas", opts: ["Impuestos", "Facturación"] },
    { title:"Mis pedidos", opts: ["Pedir nuevamente", "lista de deseo"] },
    { title:"Garantía de Entrega", opts: [] },
];

for (let pie_paginas of pie_pagina) {
    
    const anchor1 = document.createElement("a");
    const list = document.createElement("li");
    list.setAttribute('class', 'col-main-item');

    const cont = document.createElement("div");
    cont.setAttribute('class','col');

    const contul = document.createElement("ul");

    anchor1.textContent = pie_paginas.title;
    anchor1.href = pie_paginas.opts;

    list.appendChild(anchor1);
    contul.appendChild(list);
    cont.appendChild(contul);

    // anchor.className = "nav-button" //asignar una nueva class

    for(let opt of pie_paginas.opts){
        const listitem = document.createElement("li");
        const anchor2 = document.createElement("a");
        anchor2.textContent = opt;
        anchor2.href = "#";

        listitem.appendChild(anchor2);
        contul.appendChild(listitem);

    }

    
    
    
    footerSelector.appendChild(cont)
}
    
    