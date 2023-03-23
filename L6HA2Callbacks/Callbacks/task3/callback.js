function discount(percentage=0, amount = 0){
    return (amount - (amount * (percentage / 100)))
}

function age_checker(age=0){
    return (age >= 10 ? true : false)
}

//console.log(age_checker(9))
//console.log(age_checker(10))
//console.log(age_checker(11))

function calculate(customer_group=[],discount_func=null){
    const group_count = customer_group.length
    let sub_total = 299 * group_count;
    if (group_count < 6){
        return `Sorry, No Discount: $${sub_total}`
    }
    const all_aged_10_and_above = customer_group.every((item) => item >= 10)
    let discount = 0
    let grand_total = undefined
    if (all_aged_10_and_above) {
        discount = 15
        if (discount_func != null) {
            discount_func(discount,sub_total)
        }
    }else{
        discount = 10
        if (discount_func != null) {
            grand_total = discount_func(discount,sub_total)
        }
    }
    return `${discount}% discount. Bill: $${grand_total}`
}
