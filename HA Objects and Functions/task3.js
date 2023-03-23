function autogenerateID(){
    let retID = "GC-";
    let len = retID.length;
    do{
        retID = "GMC-"+ Math.floor(Math.random() * 9999999999);
        len = retID.length;
    }while (len != 14)
    return retID;
}

function getCurrentDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let xdate = `${month}/${day}/${year}`;
    return new Date(xdate);
}

const bankAccount ={
    "bankAccountID"  : autogenerateID(),
    "accountNumber"  : "23532536",
    "credentials"    : [
        "GarryCacho",
        "myPassword124!#@",
        "077312"
    ],
    "balance"        : 1000,
    "createdAt"      : getCurrentDate()
}

const userAccount = {
    "bankAccount" : bankAccount,
    "debitCard"   : 05564543,
    "firstName"   : "Garry",
    "lastName"    : "Cacho",
    "birthDate"   : new Date("12/01/1985"),
    "validID"     : [
        {
            "typeofID" : "PRC",
            "IDNo"     : "9439090"
        },
        {
            "typeofID" : "DRIVER'S LICENSE",
            "IDNo"     : "J1-43U3994-9973"
        },        {
            "typeofID" : "PASSPORT",
            "IDNo"     : "K5-92744-73774-473"
        }
    ],
    "address"     : "8374, Kuta, Kinabalu"
}

function getBankAccountDetails(username, password){
    if ((username === userAccount.bankAccount.credentials[0]) &&
        (password === userAccount.bankAccount.credentials[1])){
        console.log();
        console.log("#######################################################")
        console.log();
        console.log(`  Bank Account ID        : ${userAccount.bankAccount.bankAccountID}`);
        console.log(`  Bank Account Number    : ${userAccount.bankAccount.accountNumber}`);
        console.log(`  Account Name           : ${userAccount.firstName} ${userAccount.lastName}`);
        console.log(`  Current Balance Amount : PhP ${userAccount.bankAccount.balance}`);
        console.log(`  Created Last           : ${userAccount.bankAccount.createdAt}`);
    }else{
        console.log();
        console.log("####### Invalid Credentials, Access Denied ###########")
    }
}

function withdrawMoney(username, password, amount){
    if ((username === userAccount.bankAccount.credentials[0]) &&
        (password === userAccount.bankAccount.credentials[1])){
        if ((userAccount.bankAccount.balance-amount)>=0){
            userAccount.bankAccount.balance -= amount;
            console.log();
            console.log("############## Withdrawal Transaction #################")
            console.log();
            console.log(`  Bank Account Number     : ${userAccount.bankAccount.accountNumber}`);
            console.log(`  Previous Balance Amount : PhP ${userAccount.bankAccount.balance + amount}`);
            console.log(`  Amount Withdrawn        : PhP ${amount}`);
            console.log(`  Current Balance Amount  : PhP ${userAccount.bankAccount.balance}`);
        } else {
            console.log();
            console.log("############## Withdrawal Transaction #################")
            console.log();
            console.log(`  Alert     : Not enough balance 💰 to complete the transaction, ☹️`);            
        }
    }else{
        console.log();
        console.log("####### Invalid Credentials, Access Denied ###########")
    }
}

function depositMoney(username, password, amount){
    if ((username === userAccount.bankAccount.credentials[0]) &&
        (password === userAccount.bankAccount.credentials[1])){
        userAccount.bankAccount.balance += amount;
        console.log();
        console.log("################ Deposit Transaction ##################")
        console.log();
        console.log(`  Bank Account Number     : ${userAccount.bankAccount.accountNumber}`);
        console.log(`  Previous Balance Amount : PhP ${userAccount.bankAccount.balance - amount}`);
        console.log(`  Amount Deposited        : PhP ${amount}`);
        console.log(`  Current Balance Amount  : PhP ${userAccount.bankAccount.balance}`);
    }else{
        console.log();
        console.log("####### Invalid Credentials, Access Denied ###########")
    }
}

getBankAccountDetails('username', 'password');
withdrawMoney('username', 'password',39995);
depositMoney('username', 'password',39995);

getBankAccountDetails('GarryCacho', 'myPassword124!#@');
depositMoney('GarryCacho', 'myPassword124!#@',8000);
depositMoney('GarryCacho', 'myPassword124!#@',10000);
withdrawMoney('GarryCacho', 'myPassword124!#@',4000);
withdrawMoney('GarryCacho', 'myPassword124!#@',16000);
withdrawMoney('GarryCacho', 'myPassword124!#@',4000);