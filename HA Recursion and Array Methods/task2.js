let InvoiceList = [
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005",
];

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

function insertToBottom(){
    function sort(x, i = x.length - 1) { // declaration of recursive function for sorting an array
        let tmp
        if (i == 0) {
            return x;
        }
        for (let j = i; j >= 0; j--) {
            if (x[j - 1] > x[i]) {
                tmp = x[j - 1];
                x[j - 1] = x[i];
                x[i] = tmp;
            }
        }
        return sort(x, i - 1);
    }
    InvoiceList = sort(InvoiceList);
}


function reverseList(){
    function reverse(a) { // declaration of recursive function for reversing an array
        if (!a.length) return a;
         return reverse(a.slice(1)).concat(a[0]);
    }
    InvoiceList = reverse(InvoiceList);
}

console.log();
console.log("Initial List Sequence");
console.log(InvoiceList.join(" "));
console.log();
insertToBottom();
console.log("insertToBottom() was invoked...");
console.log(InvoiceList.join(" "));
console.log();
reverseList();
console.log("reverseList() was invoked...");
console.log(InvoiceList.join(" "));