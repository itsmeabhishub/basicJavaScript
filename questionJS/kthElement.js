


function kThElement(arr){
    let newArr=[]
    k=2
    k= k % arr.length
    if(arr.length === 0){
        return[]
    }else{
        for(let i=k; i<=arr.length-1;i++){
                newArr.push(arr[i])
        }
        for(let i=0; i < k;i++){
                newArr.push(arr[i])
        }
        }

        return newArr;
}

console.log(kThElement([1,2,3,4,5,6]));
