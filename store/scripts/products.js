// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
// };
// producto1.id = "id123";
// producto1['foto'] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

// console.log(producto1);

// // proyecto nuevo
// class Product {
//     constructor(id, title, price, stock, images, onsale) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     }
// }

// const prod1 = new Product();
// const prod2 = new Product("13c","xiaomi redmi 13 c",560);
// const prod3 = new Product("13c","xiaomi reedmi 13 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true);

// console.log(prod1);
// console.log(prod2);
// console.log(prod3);
//-----------------------------------fin de proyecto nuevo-------------------

//------------------mejorando el proyecto - modificacion y obtencion de una propiedad -----------------------
// class Product {
//     constructor(id, title, price, stock, images, onsale, supplier) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this._supplier = supplier;
//     }

//     get getSupplier() {
//         return this._supplier;
//     }
//      set setSupplier(newName) {
//         this._supplier = newName;
//     }
        
// }

// const prod4 = new Product("13c","xiaomi reedmi 13 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electroni");

// prod4.setSupplier = 'isaias';
// console.log(prod4.getSupplier);
// console.log(prod4);

// ---------------------------fin de mejorando el proyecto nuevo

// -------------------------mejorando el proyecto - restar la cantidad ventida---------------------------
// class Product {
//     constructor(id, title, price, stock, images, onsale, supplier) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this._supplier = supplier;
//     }

//     get getSupplier() {
//         return this._supplier;
//     }
//     set setSupplier(newName) {
//         this._supplier = newName;
//     }

//     sellUnits(units) {
// 		this.stock = this.stock - units
// 	}
        
// }

// const prod4 = new Product("13c","xiaomi reedmi 13 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electroni");
// const prod5 = new Product("12c","xiaomi reedmi 12 c",560,10,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electronies");

// prod5.sellUnits(9);
// console.log(prod5);
// -----------------------------------fin de mejora---------------------------

// -----------------------------proyecto completo----------------------------

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    }

    get getSupplier() {
        return this._supplier;
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }

    sellUnits(units) {
		this.stock = this.stock - units
	}
        
}

const prod1 = new Product();
const prod2 = new Product("13c","xiaomi redmi 13 c",560);
const prod3 = new Product("13c","xiaomi reedmi 13 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true);
const prod4 = new Product("13c","xiaomi reedmi 13 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electroni");
const prod5 = new Product("12c","xiaomi reedmi 12 c",560,10,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electronies");


console.log(prod1);

console.log(prod2);
console.log(prod2['title']); // llamar una propiedad especifica
console.log(prod2.title); // llamar una propiedad especifica

console.log(prod3);
console.log(prod3.onsale); // llamar una propiedad especifica

prod4.setSupplier = 'Electroni SAC'; // usamos el metodo para modificar
console.log(prod4.getSupplier); // usamos el metodo para mostrar el cambio
console.log(prod4);

prod5.sellUnits(9);
console.log(prod5);
