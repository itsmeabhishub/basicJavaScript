const arr = [1,2,3,4,5]

const myArr = new Array(1,2,3,4,5,7,0,25)

// Array do shallow copy means copy refrence

console.log(myArr);

console.log(arr[0]);
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr); //[ 9, 1, 2, 3, 4, 5 ]
arr.shift()
console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log(arr.includes(9)); //false
console.log(arr.indexOf(9)); //-1

const myNewArr = arr.join()

console.log(myNewArr); //1,2,3,4,5
console.log(typeof myNewArr); //string


//slice or splice

console.log('A', arr)//A [ 1, 2, 3, 4, 5 ]
console.log(arr.slice(1,3)) //[ 2, 3 ]
console.log('B', arr) // B [ 1, 2, 3, 4, 5 ]

const splicePattern= arr.splice(1,3)
console.log(splicePattern); //[ 2, 3, 4 ]

console.log('c', arr) // c [ 1, 5 ]