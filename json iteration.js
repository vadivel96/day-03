 /***************************************json iteration********************************/

var person={
    name:"aravindh",
    gender:"male",
   
}
let personjson=JSON.stringify(person);
console.log(personjson);

for (var iterator of personjson) {                                               //for of loop
    console.log(iterator);
    
}
for (let key in person) {                                                         //for in loop
    console.log(`key is ${key} value is ${person[key]}`);
   
}                                                                                 //for loop
for(let i=0;i<personjson.length;i++){
    console.log(personjson[i]);
    
}