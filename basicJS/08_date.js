let myDate = new Date()

console.log(myDate.toString())//Mon Jun 23 2025 20:02:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Mon Jun 23 2025
console.log(myDate.toISOString()) //2025-06-23T20:02:19.908Z
console.log(myDate.toJSON())      // 2025-06-23T20:02:19.908Z
console.log(myDate.toLocaleDateString('ind'))      // 6/23/2025
console.log(myDate.toTimeString())      // 20:04:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleTimeString())      // 8:05:40 PM
console.log(myDate.getMonth())      //5


// let myCreatedDate = new Date(2025, 5, 24) 
//  let myCreatedDate = new Date(2025, 5, 24, 1, 43) 
 let myCreatedDate = new Date("06-24-2025") 
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp );

//changing into second

console.log(Math.floor(myTimeStamp /1000));
