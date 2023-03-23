class Products{
    constructor(){
        this.products = [];
    }
    add(product){
        this.products.push(product);
    }
    printProducts(){
        for (let product of this.products){
            product.printProduct();
        }
    }
}

module.exports = Products;