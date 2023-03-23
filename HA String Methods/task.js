let text_array = [
    "there is a storm coming to the East of the Philippines",
    "no more rainy days here, sun is about to show up"
];

function isAlphabet(value){ // checks a value if it is a valid alphabet letter
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.concat(alphabet.toUpperCase());
    return Array.from(alphabet).some((letter) => letter === value)
}

function showFirstUpperCaseLetterOccurrence(value){
    let ret = "";
    let foundFirst = false;
    Array.from(value).forEach(letter =>{
        if ((letter.toUpperCase() === letter)&&(isAlphabet(letter))&&(!foundFirst)) {
            ret = letter;
            foundFirst = true;
        }
    });
    return ret;
}

console.log();
text_array.forEach(statement => {
    console.log(`Statement: "${statement}"`);
    let firstUpperCase = showFirstUpperCaseLetterOccurrence(statement);
    if (firstUpperCase !== ""){
        console.log(`  First Uppercase Letter found is : "${firstUpperCase}"`)
    }else{
        console.log(`  The statement does not contain any upper case letter.`)
    }
    console.log();
})