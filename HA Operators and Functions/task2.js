function computeTip(totalBill){
    const tipPercentage = 10;
    let tipPayable = totalBill * tipPercentage / 100;
    return tipPayable;
}
let totalFoodPrice = 7000;
console.log(`Total meal price is ${totalFoodPrice} Pesos. The corresponding tip payable is ${computeTip(totalFoodPrice)} Pesos. Thank You!`)