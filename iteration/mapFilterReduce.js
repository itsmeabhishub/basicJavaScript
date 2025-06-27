const arr = [1,2,3,4,5,6,7,8,9]

const arrMdfy= arr.map((item)=> item * 10)

console.log(arrMdfy); /*[
  10, 20, 30, 40, 50,
  60, 70, 80, 90
] */


const filterArray = arr.filter((item)=> (item % 2 === 0))

console.log(filterArray); //[ 5, 6, 7, 8, 9 ]

const reduceArray = arr.reduce((acc, currVal)=> (acc+ currVal), 0)

console.log(reduceArray); 45
