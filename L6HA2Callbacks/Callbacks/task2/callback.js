function discount(percentage=0, amount = 0){
    return (amount - (amount * (percentage / 100)))
}

function age_checker(age=0){
    return (age >= 10 ? true : false)
}

//console.log(age_checker(9))
//console.log(age_checker(10))
//console.log(age_checker(11))