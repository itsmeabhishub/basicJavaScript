function printMyName(){
    console.log('A');
    console.log('B');
    console.log('H');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('E');
    console.log('K');
    
}

// printMyName()

function addTwoNumber(num1, num2){
    if(num1 === Number && num2 === Number){
    return num1 + num2
    }
}


// console.log(addTwoNumber(1,'a'))

function userNamePrint(username){
    
    return(`${username} welcome`)
    
}

const abc = userNamePrint('Abhi')
console.log(abc)

const obj = {
    name:'Abhi',
    domain: 'IoT'
}

function getObject(getObj){
    console.log(`My ${Object.keys(getObj)[0]} is ${getObj.name} and my ${Object.keys(getObj)[1]} is ${getObj.domain}`)
}
getObject(obj)

const array=[1,2,4,5]

function getArray(getArr){
    return getArr[3]
}

const abcd = getArray(array)
console.log(abcd);
