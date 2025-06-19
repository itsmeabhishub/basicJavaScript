const str= 'Abhishek'
const role ='Developer'
console.log(`Hi this is ${str} and i am a frontend ${role} at cognizant`)

// use back strick method to concat the string

const nameUpdate= new String('Abhishek    ')

console.log(nameUpdate.at(3))//i
console.log(nameUpdate.length)//8
console.log(nameUpdate.concat(` ${role}`))//Abhishek Developer
console.log(nameUpdate.endsWith('!'))//false
console.log(nameUpdate.toLowerCase().includes('E'))//false
console.log(nameUpdate.toUpperCase().includes('K'))//true
console.log(nameUpdate.indexOf('k', 11))/-1
console.log(nameUpdate.trim())//Abhishek
console.log(nameUpdate.trimEnd())//Abhishek
console.log(nameUpdate.match('k'))//[ 'k', index: 7, input: 'Abhishek    ', groups: undefined ]
console.log(nameUpdate.matchAll('A'))//[ 'k', index: 7, input: 'Abhishek    ', groups: undefined ]
console.log(nameUpdate.trim().padStart(16,'awe'))//aweaweawAbhishek
console.log(nameUpdate.repeat(5))//Abhishek    Abhishek    Abhishek    Abhishek    Abhishek 
console.log(nameUpdate.replace('Abhishek', 'shubham'))//shubham
console.log(nameUpdate.valueOf())//Abhishek