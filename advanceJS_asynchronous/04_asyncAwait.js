const p = new Promise((resloved, reject)=>{
     resloved('Hi Resolved')
    //  reject('Hi Reject')
})

const HandlePromise = async()=>{
    try{
        const result = await p
        console.log(result)
    }
    catch(err){
        console.log(err) 
    }
    
}

HandlePromise()