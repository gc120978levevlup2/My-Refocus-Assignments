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
        "Garry M. Cacho",
        "myPassword124!#@",
        "077312"
    ],
    "balance"        : 1000,
    "createdAt"      : getCurrentDate()
}

console.log(bankAccount);