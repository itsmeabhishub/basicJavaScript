

function oneConsecutive(arr){
    let current=0;
    let max=0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]=== 1){
            current ++;
            max= Math.max(max,current)
        } else{
            current = 0;
        }
    }

    return max;
}

console.log(oneConsecutive([1,2,3,1,1,1,1,1,3,4,1,1,1,]));
