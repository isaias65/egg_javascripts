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
const prod4 = new Product("14c","xiaomi reedmi 14 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electroni");
const prod5 = new Product("15c","xiaomi reedmi 15 c",560,3,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",true, "Electroni");

const products = [prod1,prod2,prod3,prod4];

products.unshift(prod5); //agregar elemento al inicio del array
products.push(prod6); //agregar elemento al final del array
products.shift(); //eliminar el primer array
products.pop(); //eliminar el ultimo array

console.log(products);
console.log(products[1]);
console.log(products[products.length-1].title); // ubicarnos en el ultimo array, para mostrar solo el title