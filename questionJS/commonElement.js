

function commonEle(arr1,arr2){
    let CommonElement=[]
    for(let i=0; i<=arr1.length-1; i++){
        for(let j=0; j<=arr2.length-1; j++){
            if(arr1[i]===arr2[j]){
                CommonElement.push(arr2[j])
            }
        }
    }
    return CommonElement
}

console.log(commonEle([10,20,30,40,6],[30,40,50,60]));
