const bmi_ranges = [
    {
        "description" : "Underweight 😟",
        "min"         : -Infinity,
        "max"         : 18.5
    },
    {
        "description" : "Normal 😁",
        "min"         : 18.5,
        "max"         : 24.9
    },
    {
        "description" : "Overweight ☹️",
        "min"         : 25,
        "max"         : 29.9
    },
    {
        "description" : "Obese 😭",
        "min"         : 30,
        "max"         : Infinity
    }
];

const persons = [
    {
        "name" : "Garry M. Cacho",
        "age"  : 43,
        "kg"   : 90,
        "height" : {
            "feet"   : 5,
            "inches" : 6
        },
    },
    {
        "name" : "Grace D. Cacho",
        "age"  : 36,
        "kg"   : 61,
        "height" : {
            "feet"   : 5,
            "inches" : 7
        },
    },
    {
        "name" : "Perla C. Dela Cruz",
        "age"  : 70,
        "kg"   : 49,
        "height" : {
            "feet"   : 4,
            "inches" : 11
        },
    },
    {
        "name" : "Alexie J. Dela Cruz",
        "age"  : 21,
        "kg"   : 55,
        "height" : {
            "feet"   : 5,
            "inches" : 9
        },
    }
];

calcBMI = (person) => { 
    let bmi =  person.kg / (person.height.feet * 12 + person.height.inches)**2  * 1549;
    return Math.round(bmi);
}

calcReconkg = (person) => {  
    let desired_bmi =  22; // bmi value at the mean for Normal interpretation
    let xkg = desired_bmi * (person.height.feet * 12 + person.height.inches)**2 / 1549;
    return Math.round(xkg);
}

detBMIInterpret = (person) => {
    let bmi = calcBMI(person);
    let interpret = "undefined and out of range";
    for(let item of bmi_ranges){
        if ((bmi > item.min) && (bmi <= item.max)) {
            interpret = `${item.description} [${item.min} to ${item.max}]`;
        } 
    }
    return interpret;
}

module.exports = {
    bmi_ranges,
    persons,
    calcBMI,
    calcReconkg,
    detBMIInterpret
}