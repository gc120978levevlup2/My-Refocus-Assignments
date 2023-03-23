let Employee = require("./Employee.js");

class Marketer extends Employee{
    constructor(name, salary = 0, specialty, products) {
        super(name, salary);
        this.specialty = specialty;
        this.products = products;
    }
    printSpecialty(){
        console.log(`I am a marketer specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    }
    promoteCompany(){
        console.log(`Welcome to ${this.companyName} - a highly dependable and flexible company. We are composed of highly skilled and motivated individuals.`);
    }
    printProducts(){
        console.log(`Products List`)
        this.products.printProducts();
    }     
}

module.exports = Marketer;