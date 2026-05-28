


function removeDuplicate(arr){
    let obj={};
    let newArray=[]
    for(i=0; i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]= true
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(removeDuplicate([1,2,3,4,4,5,3,7,6,8]));


