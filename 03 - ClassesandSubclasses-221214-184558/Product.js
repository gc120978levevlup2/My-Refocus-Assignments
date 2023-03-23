class Product{
    constructor(name, description, productOwner){
        this.name = name;
        this.description = description;
        this.productOwner = productOwner;
    }
    printProduct(){
        console.log(`   ${this.name} - ${this.description} - by ${this.productOwner.name}`);
    }
}

module.exports = Product;