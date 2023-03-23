let Employee = require("./Employee.js");

class TeamLead extends Employee {
    constructor(name, salary = 0, specialty) {
        super(name, salary);
        this.specialty = specialty;
    }
    printSpecialty(){
        console.log(`I am a team lead specializing in ${this.specialty}.`);
    }
    printEmployer(){
        if (this.hiredStatus)
            console.log(`I work at ${this.companyName}.`)
        else
            console.log(`I am currently submitting an application at ${this.companyName}.`)
    }
    giveInstruction(employee, instructionMessage){
        if (employee && employee.hiredStatus){
            employee.instructions.push({
                name        : this.name,
                description : instructionMessage
            });
        } 
    }
}

module.exports = TeamLead;