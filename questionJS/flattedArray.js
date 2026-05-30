
let flarArr=[]
function flattenArray(arr){
    
  for(let i =0; i<= arr.length-1;i++){
    if(Array.isArray(arr[i])){
        flattenArray(arr[i])
    }else{
        flarArr.push(arr[i])
    }
  }
  
  return flarArr;
return arr.flat(Infinity)
}

console.log(flattenArray([1,2,3,4,5,[33,44,55,[65,69,87]]]));
