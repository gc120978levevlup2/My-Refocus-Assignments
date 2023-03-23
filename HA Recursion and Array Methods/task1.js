const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

let data = [];

arr.forEach((val) =>{
    if (data[val] == undefined){
        data[val] = 1;
    }else{
        data[val] ++;
    }
});

console.log(data);
