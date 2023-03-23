function createBankAccount(name){
    let balance = 0;
    console.log();
    console.log(`A 🏦 bank account under the name of ${name} is opened, with current balance 💰 of PhP ${balance}.`);
    function checkBalance(){
        console.log();
        console.log(`Bank account name : ${name}`);
        console.log(`     Current 💰 balance of PhP ${balance}`);
    }
    function depositAmount(amount){
        balance += amount;
        console.log();
        console.log(`Amount 💰 Deposited : PhP ${amount}`);
    }
    function withdrawAmount(amount){
        if ((balance - amount) < 0) {
            console.log();
            console.log(`Sorry you do not have enough cash 💵 balance. ☹️`);          
        }else{
            balance -= amount;
            console.log();
            console.log(`Amount 💰 Withdrawn : PhP ${amount}`);
        }
    }
    return {
        checkBalance, depositAmount, withdrawAmount
    }
}

let myBankAccount = createBankAccount("Garry M. Cacho");
myBankAccount.depositAmount(5000);
myBankAccount.checkBalance();
myBankAccount.depositAmount(8000);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(12000);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(600);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(6000);