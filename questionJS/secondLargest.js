

function secondLargestNum(arr){
    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i<=arr.length; i++){
        if(arr[i]>firstLargest){
            secondLargest= firstLargest;
            firstLargest=arr[i]
        }
        if(arr[i]>secondLargest && arr[i] !== firstLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargestNum([12,44,11,98,33,66,88,76,120]));
