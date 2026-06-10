

function objectIntoArray(obj){
        let res = []
        for (let key in obj){
            if(typeof obj[key]==="object" && 
                obj[key] !== null && !Array.isArray(obj[key])
            ){
            res.push(...objectIntoArray(obj[key]))
            }else{
                res.push(obj[key])
            }
        }
        return res
}


const obj={
    name:'Abhishek',
    address:{
        place:"Jamui"
    }
}

console.log(objectIntoArray(obj))