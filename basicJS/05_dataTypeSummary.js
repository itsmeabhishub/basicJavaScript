// Primative data type:- Simply means that a value is going to copy once you copy that dataType

//7 type of primative dataType:- string,number,boolean, null, undefined, symbol. bigInt

let name= 'Abhishek'
let scoreNumber= 32
let isTrueFalse = true
let initialAccountBalance = null
let accountType
let newSymbol = Symbol('123')
let updatedSymbol= Symbol('123')
let bigNumber = 12344567647553n

console.log(typeof accountType, typeof initialAccountBalance);
console.log(newSymbol === updatedSymbol); // false


// Non-Primative:- referance is going to copy

// Array, Object, Function

const array = ['Abhi', 'DY', 'Sid']

let obj = {
    name: 'Abhi',
    Age: '25'
}

function Func()  {
return 'Hello'
}

console.log(typeof Func);
