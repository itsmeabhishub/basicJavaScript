// let score = '33'
// let score = null
let score = true

console.log(typeof score)

let newScore = Number(score)

console.log(typeof newScore);
console.log( newScore);


// "33" => 33
//"33a" => NaN
// true => 1, false => 0

let conversion = 'ABHI'

console.log(conversion)

let newConversion = Boolean(conversion)

console.log(newConversion);

// 1=> true
//""=> false
//"Abhi" => true

let str= 33
console.log(typeof str);
let newStr = String(str)

console.log(typeof newStr);
console.log(newStr);

// 33 => "33"

let stringCon1 = 'Abhishek'

let stringCon2 = 'Anand'

console.log(stringCon1 + ' ' +stringCon2)// Abhishek Anand

console.log('1' + 2) // 12
console.log(1 + '2') // 12
console.log('1' + 2 + 3) // 123
console.log(1 + 2 + '3') // 33
console.log(+true) // 1
// console.log(true+) // 1
console.log(+'') // 0
// console.log(''+) // 0



// prefix and postFix

let x = 3
let y = x++
let z = ++y

console.log(x,y,z)// 5,3,5
console.log(x,y,z)// 4,4,4
