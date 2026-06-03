

const arr=[2,3,4,5]

const result = arr.filter((i)=>
    { return i>3})

console.log(result)


function myFilter(int, callback){
    let res = []
        for(let i =0; i<int.length; i++){
           if(callback(arr[i],i, arr)){
            res.push(arr[i])
           }
        }
        return res
}

const arr1 = [1,2,3,4]

const abc= myFilter(arr1, (i)=> {return i>2})

console.log(abc);
