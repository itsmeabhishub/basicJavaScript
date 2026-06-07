

function uniqueElement(arr){
    let unique = [];
    
    for(let i = 0; i<arr.length; i++){
        let count=0
        for (let j= 0; j< arr.length; j++){
                if(arr[i] === arr[j]){
                    count++
                }
        }
        if(count===1){
        unique.push(arr[i])
    }
    }
    return unique

}

console.log(uniqueElement([1,2,3,4,5,6,4,3,2,1]));
