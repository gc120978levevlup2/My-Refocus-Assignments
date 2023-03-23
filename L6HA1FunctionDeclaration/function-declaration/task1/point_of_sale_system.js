const store_inventory = [
    {
        item     : "Shampoo",
        quantity : 1,
        price_$  : 3
    },
    {
        item     : "Soap",
        quantity : 0,
        price_$  : 2
    },
    {
        item     : "Toothpaste",
        quantity : 2,
        price_$  : 3
    }
]

const new_deliveries = [
    {
        item            : "Shampoo",
        quantity        : 5,
        price_$         : 4,
        inventory_index : 0
    },
    {
        item            : "Soap",
        quantity        : 10,
        price_$         : 2,
        inventory_index : 1
    },
    {
        item            : "Toothpaste",
        quantity        : 10,
        price_$         : 3,
        inventory_index : 2
    },
]

function processDeliveries(items_obj){
    let i = items_obj.inventory_index
    store_inventory[i].quantity += items_obj.quantity
    store_inventory[i].price_$ = items_obj.price_$
}

new_deliveries.forEach( (item) => {
    processDeliveries(item)
})

//console.log("Delivered items have been added to the inventory.")
//console.log("New inventory summary:")
//console.log(store_inventory)

function productSummary(items_obj){
    const item_id = items_obj.item.slice(0,3).toLowerCase()
    let remarks = "good"
    if (items_obj.quantity < 10) remarks = "item stock is low"
    let message = `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `.concat(remarks)
    return message
}

//console.log(productSummary(store_inventory[2]))

const report_summary = store_inventory.map((item) => productSummary(item))

//console.log(report_summary)