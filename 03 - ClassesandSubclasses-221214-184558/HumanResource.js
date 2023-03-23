let Employee = require("./Employee.js");

class HumanResource extends Employee{
    constructor(name, salary = 0, specialty){
        super(name, salary);
        this.specialty = specialty;
        this.hiredStatus = true;
    }
    printSpecialty(){
        console.log(`I am a Human Resource specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    }
    hireAnEmployee(employee){
        if (employee) {
            employee.hiredStatus = true;
            employee.hiredBy = this;
        }
    }
}

module.exports = HumanResource;

