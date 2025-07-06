const p1 = new Promise((resolved, reject)=>{
    setTimeout(() => {
        resolved('Hi P1 Resolved')
    }, 10000);
    
})
const p2 = new Promise((resolved, reject)=>{
    setTimeout(() => {
        resolved('Hi P1 Resolved')
        // reject('Hi P1 Resolved')
    }, 5000);
})

const HandlePromise= async()=>{
    try{
        console.log('Hi Wlecome to Async');
        const res1 = await p1
        console.log('Hi Waitring for p1 to resolve')
        console.log(res1);
        const res2 = await p2
        console.log('Hi Waitring for p2 to resolve')
        console.log(res2);
        
    }
    catch(err){
        console.log(err);

    }
}

HandlePromise()