


function mergeArray(arr1, arr2){
        const obj={}
        const newArray=[]
        for(let i = 0; i<= arr1.length -1; i++){
            if(!obj[arr1[i]]){
                    obj[arr1[i]]=true
                    newArray.push(arr1[i])
                }
        }
        for(let j=0; j<= arr2.length -1; j++){
                if(!obj[arr2[j]]){
                    obj[arr2[j]]=true
                    newArray.push(arr2[j])
                }
            }
        return newArray

        const merged =[...arr1, arr2]
        

}



console.log(mergeArray([1,2,3,45],[3,4,5,6,7,8]));
