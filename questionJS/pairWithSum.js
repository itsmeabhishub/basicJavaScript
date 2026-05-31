

function pairSum(arr){
    let newArr=[]
    for(let i =0; i<arr.length-1; i++){
        if(arr[i]=== arr[i+1]){
            newArr.push[arr[i], arr[i+1]]
            let sum= arr[i]+arr[i+1]
            console.log(`Sum of ${arr[i]} and ${arr[i+1]} is =`, sum)
        }
    }
}

pairSum([1,2,3,3,4,5,5])