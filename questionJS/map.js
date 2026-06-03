

function map(array){
        let arr = array.map((value)=>{
            return value * 2
        })

        return arr
}

console.log(map([11,22,33,44]));


function upperCase(str){
    let char= str.map((val)=>{
        return val[0].toUpperCase() + val.substring(1)
    })
    return char
}

console.log(upperCase(["aman", "ankit"]));


function square(array){
        let arr = array.map((value)=>{
            return value * value
        })

        return arr
}

console.log(square([11,22,33,44]));

function evenOdd(val){
        let num = val.map((x)=>{
            if(x%2===0){
                return(`${x} is even number`);
                
            } else {
                return(`${x} is odd number`);
            }
        })
        return num
}

console.log(evenOdd([11,22,33,44]))

function obj(object){
    let num = object.map((value)=>{
        return value.name
    })
    return num

}

console.log(obj([{name: 'Ankit'},{name: 'Ankit'}]));
