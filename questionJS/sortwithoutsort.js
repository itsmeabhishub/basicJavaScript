

function sort(arr){
    
    for(i=0; i<= arr.length -1; i++){
        for(j=0; j<=arr.length -1 -i; j++){
            if(arr[j]>arr[j+1] ){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp
            }
        }
    }
    return arr;

    // return arr.sort()

}

console.log(sort([23,1,43,22,56,35]));
