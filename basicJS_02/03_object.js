// singleton
//Object.create()

//Object lierals

const mySymbl = Symbol('mrKey1')

const obj = {
    name: 'Abhishek',
    "full Name": 'Abhishek Anand',
    email: 'abhishek.anand8544@gmail.com',
    Address: 'Jamui, Bihar',
    [mySymbl]: 'myKey1',
    email: 'abc@cognizant.comm'
}

console.log(obj.name); 
console.log(obj["full Name"]);
console.log(obj[mySymbl]);
console.log(obj[mySymbl]);
console.log(typeof obj[mySymbl]);

obj.email= "abc@ddnew.com"
// Object.freeze(obj)
obj.email='abc@aajtak.com'
console.log(obj) //it does not changes the value as we have freeze the obj

//function in obj

obj.greet = function(){
    console.log("Hey welcome to function in object")
}
// console.log(obj.greet())
obj.greet()

