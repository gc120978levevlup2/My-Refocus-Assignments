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
    const all_aged_10_and_above = customer_group.every((age) => age_checker(age))
    let discount = 0
    let grand_total = undefined
    if (all_aged_10_and_above) {
        discount = 15
        if (discount_func != null) {
            grand_total = discount_func(discount,sub_total)
        }
    }else{
        discount = 10
        if (discount_func != null) {
            grand_total = discount_func(discount,sub_total)
        }
    }
    return `${discount}% discount. Bill: $${grand_total}`
}


const customer_group1 = [8,12,11,11,18,24,5,10]
console.log(calculate(customer_group1,discount))
const customer_group2 = [10,11,11,13,19,14]
console.log(calculate(customer_group2,discount))
const customer_group3 = [12,12,14]
console.log(calculate(customer_group3,discount))