let customer = {
    customer_name : "Johnny Manggo",
           points : 12300,
             cart : [
                {
                        item : "Shampoo",
                    quantity : 2,
                     price_$ : 3
                },
                {
                        item : "Soap",
                    quantity : 2,
                     price_$ : 2
                },
                {
                        item : "Toothpaste",
                    quantity : 1,
                     price_$ : 3
                }
              ]
}

console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`)
console.log(`Your current points are: ${customer.points}`)
let total_bill = 0
for (let it of customer.cart) {
    console.log(`${it.quantity} x ${it.item} ---- $ ${it.price_$  * it.quantity}`)
    total_bill += it.price_$ * it.quantity
    customer.points += it.quantity
}
console.log(`Total Bill: $ ${total_bill}`)
console.log(`New current points: ${customer.points}`)