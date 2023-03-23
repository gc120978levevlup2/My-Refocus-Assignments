const {
    bmi_ranges,
    persons,
    calcBMI,
    calcReconkg,
    detBMIInterpret
} = require("./bmi_calculator");

console.log();
console.log(`Start of Manual Unit Testing ... `);

const testCalcBMI = () => {
    console.log();
    console.log(`Unit testing calcBMI function... `);
    //Start of Arrange stage
    const a1 = persons[0];
    const expectedResult = 32;
    
    //Start of Act stage
    const result = calcBMI(a1);
    
    //Start of Assert stage
    console.assert(
        result === expectedResult,
        `The result ${result} doesn't match the expected value ${expectedResult}.` 
    );
    if (result === expectedResult) {console.log(`passed ...`)}
}

const testCalcReconkg = () => {
    console.log();
    console.log(`Unit testing calcReconkg function... `);
    //Start of Arrange stage
    const a1 = persons[0];
    const expectedResult = 62;
    
    //Start of Act stage
    const result = calcReconkg(a1);
    
    //Start of Assert stage
    console.assert(
        result === expectedResult,
        `The result ${result} doesn't match the expected value ${expectedResult}.` 
    );
    if (result === expectedResult) {console.log(`passed ...`)}
}

const testDetBMIInterpret = () => {
    console.log();
    console.log(`Unit testing detBMIInterpret function... `);
    //Start of Arrange stage
    const a1 = persons[0];
    const expectedResult = `Obese 😭 [30 to Infinity]`;
    
    //Start of Act stage
    const result = detBMIInterpret(a1);
    
    //Start of Assert stage
    console.assert(
        result === expectedResult,
        `The result ${result} doesn't match the expected value ${expectedResult}.` 
    );
    if (result === expectedResult) {console.log(`passed ...`)}
}

testCalcBMI();
testCalcReconkg();
testDetBMIInterpret();

console.log();
console.log(`Manual Unit Testing ... Done!`);