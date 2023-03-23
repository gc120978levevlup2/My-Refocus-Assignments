let Employee = require("./Employee.js");

class Developer extends Employee{
    constructor(name, salary = 0, specialty){
        super(name, salary);
        this.specialty = specialty;
        this.codeStatus = [];
    }
    printSpecialty(){
        console.log(`I am a web developer specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    }
    printcodeStatus(){
        console.log();
        console.log(`${this.name}:`);
        if (this.codeStatus < 1) console.log(`  I don't have code reviews`);
        for (let code of this.codeStatus){
            console.log(`   ${code.name} ${code.description}`);
        }
    }
}

module.exports = Developer;