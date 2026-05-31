

function sumTarget(arr){
    let newArr = []
    let target =6;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1; j<arr.length ; j++){
            if(arr[i]+arr[j] === target){
                newArr.push([arr[i],arr[j]])
            }
        }
    }
    return newArr;
}

console.log(sumTarget([1,2,3,3,4,5]));
