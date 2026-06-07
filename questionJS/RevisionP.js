

function promiseProfill(f1){
    let OnResolve, OnReject, 
    value,
    isFullfiled = false, isRejected=false
    isCalled=false;
    ;

        function resolve(val){
            isFullfiled = true
            value=val
            if(typeof OnResolve==='function'){
                OnResolve(value)
                isCalled= true
            }
        }
        function reject(val){
            isRejected = true
            value=val
            if(typeof OnReject === 'function'){
                OnReject(value)
                isCalled= true
            }
        }

        this.then= function(callback){
            OnResolve = callback
            if(isFullfiled && !isCalled){
                isCalled= true;
                OnResolve(value)
            }
            return this
        }
        this.catch= function(callback){
            OnReject = callback
            if(isRejected && !isCalled){
                isCalled= true
                OnReject(value)
            }
                return this
        }

    
    f1(resolve,reject)
}


const exPromise = new promiseProfill((resolve, reject)=>{
    // setTimeout(() => {
        resolve(2)
    // }, 2000);
})

exPromise
.then((res)=>{
    console.log('Resolve',res)
})
.catch((err)=>console.log("Reject",err))