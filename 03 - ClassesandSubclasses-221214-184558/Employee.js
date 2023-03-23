class Employee{
    constructor(name, salary = 0){
        this.companyName = "MHA";
        this.name = name;
        this.salary = salary;
        this.hiredStatus = false;
        this.instructions = [];
        this.hiredBy = null;
    }
    printIntro(){
        console.log(`Hi, my name is ${this.name}.`);
    }
    printSalary(){
        if (this.hiredStatus === false)
            console.log(`${this.name}'s asking salary is PhP${this.salary.toLocaleString()}.`);
        else
            console.log(`${this.name}'s basic salary is PhP${this.salary.toLocaleString()}.`);
        if (this.hiredBy){
            console.log(`I was hired by ${this.hiredBy.name}.`);
        }
    }
    printInstruction(){
        console.log();
        console.log(`${this.name}:`);
        if (this.instructions.length < 1) {
            console.log(`   There are no instructions given to me.`);
        }
        for (let instruction of this.instructions){
            console.log(`   ${instruction.name} instructed me to ${instruction.description}`);
        }
        this.instructions = [];
    }
}

module.exports = Employee;