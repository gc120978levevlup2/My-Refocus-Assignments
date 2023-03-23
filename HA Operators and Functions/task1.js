// Celsius + 273.15; referenced from Google
// Cannot directly implement convertToKelvin(tempCelsius) and  convertToKelvin(tempFahrenheit)
// since its parameters tempCelsius and tempFahrenheit have the same data type.
// so I implemented 2 functions namely convertToKelvinF(tempFahrenheit) and convertToKelvinC(tempCelsius)

function convertToCelsius(tempFahrenheit){
    let tempCelsius = (tempFahrenheit - 32) / 1.8;
    return tempCelsius;
}

function convertToKelvinF(tempFahrenheit){
    let tempKelvin = convertToCelsius(tempFahrenheit) + 273.15;
    return tempKelvin;
}

function convertToKelvinC(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

let tempFahrenheit1 = 84,
    tempCelsius1 = 95;

console.log(`${tempFahrenheit1} degF is equal to ${convertToKelvinF(tempFahrenheit1)} degK.`);
console.log(`${tempCelsius1} degC is equal to ${convertToKelvinC(tempCelsius1)} degK.`);


