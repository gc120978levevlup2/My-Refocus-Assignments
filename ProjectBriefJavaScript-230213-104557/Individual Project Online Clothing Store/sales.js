const online_shop = {
            unique_code : 5473246,
                   name : "Buyong's Ukay Ukay - ang online shop ng bayan!",
                address : "Kalye Batung-bakal cor. 10th Street, Isla Magdugo, Bayan ng Pulang Bato, Jolo, Sulu",
                  users : [
                                {
                                                id : '353-877-626-674-54',
                                             email : "admin@mail.co",
                                          pin_code : '905-103',
                                        first_name : "admin",
                                          sur_name : "admin",
                                               age : 0,
                                           irthday : "1-1-1970",
                                        log_status : false,
                                              cart : [],
                                      bought_items : [],
                                }
                          ],
                  items : [
                                {
                                                id : '518-761-670-329-63',
                                              name : "place-holder",
                                          category : "none",
                                             price : 0,
                                            status : "in stock",
                                               qty : 0,
                                              sold : 0,
                                   stock_threshold : 1000,
                                }
                          ],
                welcome : function() {
                            console.log()
                            console.log('     ------------------------------------------------------------------------------------'  )
                            console.log(`                        ${online_shop.name}`)
                            console.log(`     ${online_shop.address}`)
                            console.log(`                                        ID: ${online_shop.unique_code}`)
                            console.log('     ------------------------------------------------------------------------------------\n')
                      },
            generate_id : function() {
                                return ((Math.random() * 1000000000000).toLocaleString().replace(",","-").replace(",","-").replace(".","-").replace(",","-").replace(".","-").replace(".","-").substring(0,18))
                          },
      generate_pin_code : function() {
                                return ((Math.random() * 1000000000000).toLocaleString().replace(",","-").replace(",","-").replace(".","-").substring(0,7))
                          },
                  login : function(email,pin_code){
                                let ret        = null
                                let found_user = this.users.find((user) => user.email === email && user.pin_code === pin_code)
                                if (found_user){
                                    ret = found_user
                                    console.log(`${found_user.first_name} ${found_user.sur_name} login is granted.\n`)
                                }else{
                                    console.log(`${email} login is denied.\n`)
                                }
                                return ret 
                          },
       user_add_to_cart : function(loggedin_user, item_name, qty){
                             if (loggedin_user){
                                let item = this.items.find((item) => item.name === item_name)
                                if (item){
                                    let to_cart_item = {
                                                        id : item.id,
                                                      name : item.name,
                                                  category : item.category,
                                                     price : item.price,
                                                    status : "in cart",
                                                       qty : qty,                            
                                                }
                                    if (to_cart_item.qty <= (item.qty - item.sold)){
                                        loggedin_user.cart.push(to_cart_item)
                                        console.log(`${loggedin_user.first_name} ${loggedin_user.sur_name} : added ${to_cart_item.qty} ${to_cart_item.name} total worth of $${to_cart_item.price*to_cart_item.qty} to cart.\n`)
                                    }else{
                                        console.log(`${loggedin_user.first_name} ${loggedin_user.sur_name} : cannot add to cart, ${item.name} has only ${item.qty-item.sold} pc/s on stock yet you ordered ${qty} pc/s\n`)
                                    }
                                }else{
                                    console.log(`Error: ${loggedin_user.first_name} ${loggedin_user.sur_name} : cannot add ${item_name} to cart, it is not available yet.\n`)
                                }
                             }else{
                                console.log(`Error: Add to cart transaction denied!\n`)
                             }
                          },
       user_view_bought : function(loggedin_user){
                                if (loggedin_user){
                                    let total = 0;
                                    console.log(`------------------------------------- ${loggedin_user.first_name} ${loggedin_user.sur_name} Incoming Deliveries -----------------------------`)
                                    for (let item of loggedin_user.bought_items) {
                                        console.log(`   $${item.price} x ${item.qty} ${item.name} worth of $${item.price*item.qty}`)
                                        total += item.price*item.qty
                                    }
                                    console.log(`---------------------------- Incoming Deliveries Grand Total: $${total} -------------------------------\n`)
                                }else{
                                    console.log(`Error: Checkout for cart transaction denied!`)
                                }
                          },
     user_cart_checkout : function(loggedin_user){
                            if (loggedin_user){
                                let total = 0;
                                console.log(`------------------------------------- ${loggedin_user.first_name} ${loggedin_user.sur_name} CART Checkout Receipt -----------------------------`)
                                for (let item of loggedin_user.cart){
                                    console.log(`   $${item.price} x ${item.qty} ${item.name} worth of $${item.price*item.qty}`)
                                    total += item.price*item.qty
                                }
                                console.log(`---------------------------- CART Grand Total: $${total} ------------------------------------------------\n`)
                            }else{
                                console.log(`Error: Checkout for cart transaction denied!`)
                            }
                      },
  user_cart_place_order : function(loggedin_user, payment_amount){
                                if (loggedin_user){
                                    let total = 0;
                                    console.log(`------------------------------------- ${loggedin_user.first_name} ${loggedin_user.sur_name} Placed Order Receipt -------------------------------`)
                                    for (let item of loggedin_user.cart){
                                        let to_purchased_item = {
                                                                      id : item.id,
                                                                    name : item.name,
                                                                category : item.category,
                                                                   price : item.price,
                                                                  status : "purchased",
                                                                     qty : item.qty,                            
                                                            }
                                        let found_item = this.items.find((x) => x.id === item.id)
                                        if (found_item){
                                            found_item.sold  += item.qty
                                            found_item.status =  (((found_item.qty - found_item.sold) > found_item.stock_threshold) ? "in stock" : `low in stock (min stock: ${found_item.stock_threshold} pc/s)`)
                                            total += item.qty * item.price
                                            loggedin_user.bought_items.push(to_purchased_item)
                                        }
                                    }
                                    loggedin_user.cart = []
                                    console.log(`---------------------------- Payment Grand Total: $${total}, Amount Received: $${payment_amount}, Change: $${payment_amount - total} -------\n`)
                                }else{
                                    console.log(`Error: Checkout for cart transaction denied!\n`)
                                }
                          },
               add_user : function(email,first_name,sur_name,age,birthday) {
                               let user = {
                                            id : this.generate_id(),
                                         email : email,
                                      pin_code : this.generate_pin_code(),
                                    first_name : first_name,
                                      sur_name : sur_name,
                                           age : age,
                                      birthday : birthday,
                                    log_status : false,
                                          cart : [],
                                  bought_items : [],
                               }
                               console.log(`New user registered: ${user.email} \nPin Code: ${user.pin_code}\nName: ${user.first_name} ${user.sur_name} \n`)
                               this.users.push(user)
                               return this.users[this.users.length-1]
                          },
               add_item : function(name,category,stock_threshold){
                              let ret        = null
                              let found_item = this.items.find((item) => item.name === name)
                              if (!found_item){
                                this.items.push({
                                                 id : this.generate_id(),
                                               name : name,
                                           category : category,
                                              price : 0,
                                             status : "out of stock",
                                                qty : 0,
                                               sold : 0,
                                    stock_threshold : stock_threshold,
                                })
                                ret = this.items[this.items.length-1]
                              }
                              return ret
                          },
         add_item_stock : function(name,price,qty){
                            let ret        = null
                            let found_item = this.items.find((item) => item.name === name)
                            if (found_item){
                                found_item.price  = price
                                found_item.qty   += qty
                                found_item.status = (((found_item.qty - found_item.sold) > found_item.stock_threshold) ? "in stock" : `low in stock (min stock: ${found_item.stock_threshold} pc/s)`)
                                ret               = found_item
                                console.log(`Added ${qty} ${found_item.name}, $${found_item.price} x ${found_item.qty}pc ${found_item.status}\n`)
                            }
                            return ret
                          },
           check_stocks : function(){
                                let i = 0;
                                console.log(`------------------------------------- Stocks List  -------------------------------------------------------------------------`)
                                for (let item of this.items) {
                                    if (i!==0)
                                    console.log(`${i}. ${item.id}, ${item.name}, $${item.price} x ${item.qty-item.sold}pc ${item.status}, Units Sold: ${item.sold}, Units Ordered from Supplier: ${item.qty}`)
                                    i++
                                }
                                console.log(`----------------------------------------------------------------------------------------------------------------------------\n`)
                          },
}

online_shop.welcome                     ()
console.log                             ('Back Office Log :\n')
online_shop.add_item                    ("socks", "foot wear", 20);
online_shop.add_item                    ("shoes", "foot wear", 120);
online_shop.add_item                    ("batman t-shirt",   "apparel", 20);
online_shop.add_item                    ("superman t-shirt", "apparel", 20);
online_shop.add_item_stock              ("socks", 500,  10)
online_shop.add_item_stock              ("socks", 500,  11)
online_shop.add_item_stock              ("shoes", 1500, 122)
online_shop.add_item_stock              ("socks", 500,  16)
online_shop.add_item_stock              ("batman t-shirt",   800, 30)
online_shop.add_item_stock              ("superman t-shirt", 800, 30)
online_shop.check_stocks                ()
console.log                             ('User Transaction Log :\n')
let loggedin_usr0 = online_shop.login   ("admin", "475-345")
online_shop.user_add_to_cart            (loggedin_usr0, "superman t-shirt" , 6);
let new_user      = online_shop.add_user("my@email.ph", "garry", "cacho", 44, "12-9-1978")
let loggedin_user = online_shop.login   (new_user.email, new_user.pin_code)
online_shop.user_add_to_cart            (loggedin_user, "superman t-shirt" , 11);
online_shop.user_add_to_cart            (loggedin_user, "socks" , 600);
online_shop.user_add_to_cart            (loggedin_user, "socks" , 6);
online_shop.user_add_to_cart            (loggedin_user, "shoes" , 3);
online_shop.user_add_to_cart            (loggedin_user, "undies", 3);
online_shop.user_cart_checkout          (loggedin_user)
online_shop.user_cart_place_order       (loggedin_user, 17000)
online_shop.user_add_to_cart            (loggedin_user, "batman t-shirt" , 6);
online_shop.user_cart_checkout          (loggedin_user)
online_shop.user_cart_place_order       (loggedin_user, 5000)
online_shop.user_view_bought            (loggedin_user)
online_shop.check_stocks                ()
