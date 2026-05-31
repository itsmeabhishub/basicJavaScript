

function linearSear(arr){
    let target=14
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}

console.log(linearSear([1,44,55,34,96,11,5,14,98,76]));
