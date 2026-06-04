

function customFilter(arr, callback){
    let res=[]
  for(let i = 0; i< arr.length; i++){
    if(callback(arr[i], i, arr)){
            res.push(arr[i])
    }
  }
  return res;
}

const arr1=[1,2,3,4,5]
let abc = customFilter(arr1,(i) => {return i>3 });

console.log(abc);

