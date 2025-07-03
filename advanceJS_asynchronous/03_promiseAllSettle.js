const p1 = new Promise((resolve, reject)=>{
    return resolve('Hi This is p1 resolved')
})
const p2 = new Promise((resolve, reject)=>{
    // return resolve('Hi This is p1 resolved')
    return reject('Hi This is p1 resolved')
})
const p3 = new Promise((resolve, reject)=>{
    return resolve('Hi This is p1 resolved')
})

const getPromiseAllSettled= async()=>{
    const result = await Promise.allSettled([p1,p2,p3]).then((res)=>{
        return res
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(result)
}

getPromiseAllSettled()