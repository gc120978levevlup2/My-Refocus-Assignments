let Employee = require("./Employee.js");

class Tester extends Employee{
    constructor(name, salary = 0, specialty) {
        super(name, salary);
        this.specialty = specialty;
    }
    printSpecialty(){
        console.log(`I am a tester specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    }
    rejectCode(developer){
        if (developer && developer.hiredStatus){
            developer.codeStatus.push({
                name        : this.name,
                description : "rejected this code."
            });
        }
    }
    acceptCode(developer){
        if (developer && developer.hiredStatus){
            developer.codeStatus.push({
                name        : this.name,
                description : "accepted this code."
            });
        }
    }
}

module.exports = Tester;