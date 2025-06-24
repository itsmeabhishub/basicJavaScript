// const tindUser = new Object() //singleton

const tindUser = {}



tindUser.id='123abc'
tindUser.name='Abhishek'
tindUser.status = 'One'

console.log(tindUser);

const testObj = {
    id:'123hgh',
    fullName: {
        testFullName:{
            firstName: 'Abhishek',
            lastName: 'Anand'
        }
    }
}
console.log(testObj.fullName.testFullName.firstName)

// Ading two object

const objTest1= {
    1:'A', 2:'B'
}

const objTest2= {
    3:'A', 4:'B'
}

// const objTest3 = Object.assign({}, objTest1, objTest2)

const objTest3 = {...objTest1, ...objTest2}

console.log(objTest3);

// const objTest4 = {1 , ...objTest3}
console.log(Object.keys(objTest3));
console.log(Object.values(objTest3));
console.log(Object.entries(objTest3));
console.log(Object.entries(objTest3).map(([key, value])=> ({key, value})));


