function myReduce(arr, callback, intialValue){
let ans= intialValue
    for(let i=0; i<arr.length; i++){
        ans=callback(ans,arr[i], i, arr)
    }
    return ans
}

const arr1=[1,2,3,4]
const reduce= myReduce(arr1, (acc, red)=> acc + red,0)

console.log(reduce);
