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

console.log(userAccount);