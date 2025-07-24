
const obj = {
    name:'Abhi',
    address:{
        city:'Jamui',
        State: 'Bihar'
    }
}

// let user = obj
// user.name='Ankit'

// console.log(obj); //{ name: 'Ankit' }

// Shallow Copy
// it copy only one object means only at outer level not to nested level

// let user = Object.assign({},obj) 
// user.name = 'Ankit'
// user.address.city='Deoghar'

// console.log(obj); //{ name: 'Abhi', address: { city: 'Deoghar', State: 'Bihar' } }
// console.log(user); //{ name: 'Ankit', address: { city: 'Deoghar', State: 'Bihar' } }

let user = JSON.parse(JSON.stringify(obj))
user.name = 'Ankit'
user.address.city='Deoghar'
user.address.State='Jharkhand'

console.log(obj); //{ name: 'Abhi', address: { city: 'Jamui', State: 'Bihar' } }
console.log(user); //{ name: 'Ankit', address: { city: 'Deoghar', State: 'Jharkhand' } }

//Limitation of deep copy is they are not able to copy the function or date in correct way that is why we need lodash thing to copy the function as it is.

// install lodash

// then we can do copy with this 
//_.cloneDeep(obj)

