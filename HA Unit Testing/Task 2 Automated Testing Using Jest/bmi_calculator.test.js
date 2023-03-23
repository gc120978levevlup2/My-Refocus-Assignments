const {
    bmi_ranges,
    persons,
    calcBMI,
    calcReconkg,
    detBMIInterpret,
    detBMIInterpretRaw
} = require("./bmi_calculator");


test(`Test calcBMI function`, () => {
    // Start of Arrange Stage
    const a1 = persons[0];                 
    const theExpectedResult = 32;

    // Start of Act Stage
    const result = calcBMI(a1);
    
    // Start of Assert Stage
    expect(result).toBe(theExpectedResult); // Assert
});

test(`Test calcReconkg function`, () => {
    // Start of Arrange Stage
    const a1 = persons[0];                 
    const theExpectedResult = 62;

    // Start of Act Stage
    const result = calcReconkg(a1);
    
    // Start of Assert Stage
    expect(result).toBe(theExpectedResult); // Assert
});

test(`Test detBMIInterpret function`, () => {
    // Start of Arrange Stage
    const a1 = persons[0];                 
    const theExpectedResult = `Obese 😭 [30 to Infinity]`;

    // Start of Act Stage
    const result = detBMIInterpret(a1);
    
    // Start of Assert Stage
    expect(result).toBe(theExpectedResult); // Assert
});

test(`Test detBMIInterpretRaw function`, () => {
    // Start of Arrange Stage
    const a1 = persons[0];                 
    let theExpectedResult = {
        "description" : "Obese 😭",
        "min"         : 30,
        "max"         : Infinity
    };

    // Start of Act Stage
    const result = detBMIInterpretRaw(a1);
    
    // Start of Assert Stage
    expect(result).toEqual(theExpectedResult); // Assert
});