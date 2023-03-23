let Employee = require("./Employee.js");
let Product = require("./Product.js");

class ProductOwner extends Employee{
    constructor(name, salary = 0, specialty, products) {
        super(name, salary);
        this.specialty = specialty;
        this.products = products;
    }
    printSpecialty(){
        console.log(`I am a product owner specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    } 
    createNewProduct(name, description){
        let product = new Product(name, description, this);
        this.products.add(product);
        console.log(`   Created ${product.name} - ${product.description}`);
    }  
}

module.exports = ProductOwner;