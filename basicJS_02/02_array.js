const superHerosSENA = ['JK', 'RP','SirDonB']

const superHerosIndian = ['MS', 'SRT','VK', 'RS']

// superHerosSENA.push(superHerosIndian)

// console.log(superHerosSENA); //[ 'JK', 'RP', 'SirDonB', [ 'MS', 'SRT', 'VK', 'RS' ] ]
const superHerosOverall = superHerosSENA.concat(superHerosIndian) //[ 'JK', 'RP', 'SirDonB', 'MS', 'SRT', 'VK', 'RS' ]
// const superHerosOverall = [...superHerosSENA, ...superHerosIndian]
console.log(superHerosOverall); //[ 'JK', 'RP', 'SirDonB', 'MS', 'SRT', 'VK', 'RS' ]

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_Another_array = another_Array.flat(Infinity)
console.log(real_Another_array) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
const filter_Another_Array = real_Another_array.filter(val => val !== 6)
console.log(filter_Another_Array)

const removeDuplicate= [...new Set(filter_Another_Array)]
console.log(removeDuplicate); [ 1, 2, 3, 4, 5, 7 ]

let score1 = 100
let score2 = 200
let score3 = 300

const arrayMakingFromVariables= Array.of(score1,score2,score3)
console.log(arrayMakingFromVariables); //[ 100, 200, 300 ]

console.log(Array.from('Abhishek')) //['A', 'b', 'h','i', 's', 'h','e', 'k']
console.log(Array.isArray('Abhishek')) //false

