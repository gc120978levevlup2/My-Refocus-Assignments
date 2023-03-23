let Employee = require("./Employee.js");

class Developer extends Employee{
    constructor(name, salary, specialty){
        super(name, salary);
        this.specialty = specialty;
    }
    printSpecialty(){
        console.log(`I am a web developer specializing in ${this.specialty}.`);
    }
    printEmployer(){
        console.log(`I work at ${this.companyName}.`)
    }
}

module.exports = Developer;