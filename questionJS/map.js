

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
