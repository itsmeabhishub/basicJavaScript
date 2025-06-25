const obj = {
    name: "Abhishek",
    domain:'iot',

    welcomeMessage :function(){
        console.log(`${this.name}  welcome`);
        console.log(this);
        
    }
}

obj.welcomeMessage()
/* this is current context for Abhishek when name is that
{
  name: 'Abhishek',
  domain: 'iot',
  welcomeMessage: [Function: welcomeMessage]
} */
obj.name = 'Ankit'
obj.welcomeMessage()
/*
this is current context when we have update the name and done console.log(this) in obj
 {
  name: 'Ankit',
  domain: 'iot',
  welcomeMessage: [Function: welcomeMessage]
} */
// this refer to current object when we are going to update the any keys for object this is going to take current one

console.log(this); // the current context of this global lexiscope is {} empty object && the current context in browser is window

function chai(){
    console.log(this)// we are getting some method or values that is store in this context
    let userDiv= 'Abhi'
    // console.log(this.userDiv) // geting undefine i.e we can use this only in object not in function
}
chai()

const coffee = () =>{
    console.log(this) // {} this key word is not available in arrow function here we can see that we are getting an empty {}context while doing console.log
}

coffee()

// basic symbol of arrow function is 
// const addTwoNum = (num1, num2 ) => {
//     return num1 + num2
// }
// const addTwoNum = (num1, num2 ) =>  num1 + num2
 //Note arrow function can be write in one line if we write in one line we dont need to give flower prenthis and if we dont give flower prenthis then we need to return arrow function automatically return it

//  const addTwoNum = (num1, num2 ) =>  (num1 + num2)

//returning the object in arrow function
 const addTwoNum = (num1, num2 ) =>  ({userName: 'itsme'}) // { userName: 'itsme' }

console.log(addTwoNum(1,2));
