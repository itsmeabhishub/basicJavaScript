

function missingNumber(arr){
    let n = arr.length+1

    let actulSum = n*(n+1)/2
    let currentSum = arr.reduce((a,b) => {return a+b}, 0)

    let missingNum= actulSum-currentSum;
    return missingNum

}

console.log(missingNumber([1,2,3,4,5,6,7,9]))