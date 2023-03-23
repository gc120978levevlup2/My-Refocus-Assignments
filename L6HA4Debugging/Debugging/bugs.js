// As found code below with bug as per task instructuons

const flowers = ["rose , star gazer , tulips , sun flower"];

for(i = 0;i<=flowers.length;i++){
    console.log(flowers[0].lentgh)
}

/*
1. At first run with the above code as is, the output is:
     undefined
     undefined
2. As per the desired output:
    4
    10
    6
    10
   Obviously these are the string length of each item in flowers array that is declared @ line #3
3. @ line #6 'flowers[0].lentgh' is syntax error, it should be 'flowers[i].length'
4. @ line #3 some of the items of flowers is syntax error. 
   should be const flowers = ["rose" , "star gazer" , "tulips" , "sun flower"];
5. @ line #5, the 2nd arguent of the for loop is a logical error and a runtime error at the same time.
   should be for(i = 0;i<flowers.length;i++)
6. 
*/
