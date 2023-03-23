let HumanResource = require("./HumanResource.js");
let Developer     = require("./Developer.js"    );
let TeamLead      = require("./TeamLead.js"     );
let Tester        = require("./Tester.js"       );
let Products      = require("./Products.js"     );
let ProductOwner  = require("./ProductOwner.js" );
let Marketer      = require("./Marketer.js"     );

let products = new Products();

let hr1 = new HumanResource("Grace Cacho", 50000, "head hunting");
hr1.printIntro();
hr1.printSalary();
hr1.printSpecialty();
hr1.printEmployer();
console.log();

console.log(`************************** Job Application Process **************************`);console.log();
let developer1 = new Developer("Garry M. Cacho", 30000, "Front-end web development");
developer1.printIntro();
developer1.printSalary();
developer1.printSpecialty();
developer1.printEmployer();
console.log();
let developer2 = new Developer("Kurt De Guzman", 43000, "Front-end web development");
developer2.printIntro();
developer2.printSalary();
developer2.printSpecialty();
developer2.printEmployer();
console.log();
let developer3 = new Developer("Ben Nayal", 36000, "Back-end web development");
developer3.printIntro();
developer3.printSalary();
developer3.printSpecialty();
developer3.printEmployer();
console.log();

let teamlead1 = new TeamLead("Joseph Yap", 86000, "Back-end web development");
teamlead1.printIntro();
teamlead1.printSalary();
teamlead1.printSpecialty();
teamlead1.printEmployer();
console.log();

let teamlead2 = new TeamLead("Jekyll Madelene", 92000, "Front-end web development");
teamlead2.printIntro();
teamlead2.printSalary();
teamlead2.printSpecialty();
teamlead2.printEmployer();
console.log();

let tester1 = new Tester("Leonor Revira", 51000, "Full-Stack web development testing");
tester1.printIntro();
tester1.printSalary();
tester1.printSpecialty();
tester1.printEmployer();
console.log();

let tester2 = new Tester("Joe Bracken", 52000, "Full-Stack web development testing");
tester2.printIntro();
tester2.printSalary();
tester2.printSpecialty();
tester2.printEmployer();
console.log();

let productOwner1 = new ProductOwner("Leny Fabrigas", 92000, "product development", products);
productOwner1.printIntro();
productOwner1.printSalary();
productOwner1.printSpecialty();
productOwner1.printEmployer();
console.log();

let productOwner2 = new ProductOwner("Jasper Avalon", 91000, "product development", products);
productOwner2.printIntro();
productOwner2.printSalary();
productOwner2.printSpecialty();
productOwner2.printEmployer();
console.log();

let markerter = new Marketer("Zoe Abellana", 101000, "marketing strategy", products);
markerter.printIntro();
markerter.printSalary();
markerter.printSpecialty();
markerter.printEmployer();
console.log();

console.log(`************************** Hiring Process **************************`);console.log();
hr1.hireAnEmployee(developer1);
hr1.hireAnEmployee(developer2);
hr1.hireAnEmployee(developer3);
hr1.hireAnEmployee(teamlead1);
hr1.hireAnEmployee(teamlead2);
hr1.hireAnEmployee(tester1);
hr1.hireAnEmployee(tester2);
hr1.hireAnEmployee(productOwner1);
hr1.hireAnEmployee(productOwner2);
hr1.hireAnEmployee(markerter);

developer1.printIntro();
developer1.printSalary();
developer1.printSpecialty();
developer1.printEmployer();
console.log();

developer2.printIntro();
developer2.printSalary();
developer2.printSpecialty();
developer2.printEmployer();
console.log();

developer3.printIntro();
developer3.printSalary();
developer3.printSpecialty();
developer3.printEmployer();
console.log();

teamlead1.printIntro();
teamlead1.printSalary();
teamlead1.printSpecialty();
teamlead1.printEmployer();
console.log();

teamlead2.printIntro();
teamlead2.printSalary();
teamlead2.printSpecialty();
teamlead2.printEmployer();
console.log();

tester1.printIntro();
tester1.printSalary();
tester1.printSpecialty();
tester1.printEmployer();
console.log();

tester2.printIntro();
tester2.printSalary();
tester2.printSpecialty();
tester2.printEmployer();
console.log();

productOwner1.printIntro();
productOwner1.printSalary();
productOwner1.printSpecialty();
productOwner1.printEmployer();
console.log();

productOwner2.printIntro();
productOwner2.printSalary();
productOwner2.printSpecialty();
productOwner2.printEmployer();
console.log();

markerter.printIntro();
markerter.printSalary();
markerter.printSpecialty();
markerter.printEmployer();
console.log();

console.log(`************************** Team Lead Instruction Process **************************`);
teamlead1.giveInstruction(developer1, "brew a good coffee");
teamlead1.giveInstruction(developer1, "push your current code for review");
teamlead2.giveInstruction(developer1, "brew a good beer");
teamlead2.giveInstruction(developer3, "fetch a code from GitHub");

developer1.printInstruction();
developer2.printInstruction();
developer3.printInstruction();

console.log();
console.log(`************************** Tester Code Evaluation Process **************************`);
tester1.rejectCode(developer1);
tester1.acceptCode(developer2);
tester1.rejectCode(developer3);
tester2.acceptCode(developer1);
tester2.acceptCode(developer2);
tester2.rejectCode(developer3);

developer1.printcodeStatus();
developer2.printcodeStatus();
developer3.printcodeStatus();

console.log();
console.log(`************************** Product Owner Product Launch Process **************************`);
console.log();
console.log(productOwner1.name);
productOwner1.createNewProduct("JAED Technologies","An Electric System Mapping and Information Technology");
productOwner1.createNewProduct("Customer Complaints System","A Fleet Management System for Customer Complaints");
productOwner1.createNewProduct("ETAP Solution","An Electric System Mapping and Information Technology");
console.log();
console.log(productOwner2.name);
productOwner2.createNewProduct("Invite","An Events Management System");

console.log();
console.log(`************************** Marketing Launch Process **************************`);
console.log();
console.log(`This is ${markerter.name} your marketing specialist.`);
markerter.promoteCompany();
markerter.printProducts();