class Employee{
    constructor(name, salary){
        this.companyName = "MHA";
        this.name = name;
        this.salary = salary;
    }
    printIntro(){
        console.log(`Hi, my name is ${this.name}.`);
    }
    printSalary(){
        console.log(`${this.name}'s salary is $${this.salary}.`);
    }
}

module.exports = Employee;