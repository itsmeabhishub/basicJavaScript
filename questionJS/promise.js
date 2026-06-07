

function promisePolyfill(f1) {
    let onResolve, onReject,
        isFullfiled = false,
        isRejected = false, isCalled = false,
        value;

    function resolve(val) {
        isFullfiled = true
        value = val
        if (typeof onResolve === 'function') {
            onResolve(val)
            isCalled = true
        }
    }
    function reject(val) {
        isRejected = true;
        value = val
        if (typeof onReject === 'function') {
            onReject(val)
            isCalled = true
        }


    }
    this.then = function (callback) {
        onResolve = callback
        if (isFullfiled && !isCalled) {
            isCalled = true;
            onResolve(value)
        }
        return this
    }

    this.catch = function (callback) {
        onReject = callback
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value)
        }
        return this
    }
try{
f1(resolve, reject)
}catch(err){
    reject(err)
}
    

}

const exPromise = new promisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000);
})

exPromise
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))