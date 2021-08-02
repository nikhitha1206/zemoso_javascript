//one-liner
const printName=(name)=>"Hi " + name;
console.log(printName("Nikhitha"))

//templete literals
const printBill=(name,bill)=>{
    return `Hi ${name} ,please pay ${bill}`
}
console.log(printBill("Nikhitha",500))

//Object destructing
const person = {
    firstName: "Noam Chomsky",
    age: 92
}
 let {firstName:fname,age}=person;
console.log("FirstName is: "+fname);
console.log("Age is: "+age)
