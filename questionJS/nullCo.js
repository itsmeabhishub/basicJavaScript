

const obj = {
        name:'Abhishek',
        address:{
            city:'jamui'
        }
}

console.log(obj?.address?.city ?? 'something went wrong')