const p1 = new Promise((reslove, reject)=>{
    return reslove('Hi This is p1 resolve')
})
const p2 = new Promise((reslove, reject)=>{
    return reslove('Hi This is p2 resolve')
})
const p3 = new Promise((reslove, reject)=>{
    // return reslove('Hi This is p3 resolve')
    return reject('Hi This is p3 reject')
})

const getAllPromise = async()=>{
    const result = await Promise.all([p1,p2,p3]).then((res)=>{
        return res
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(result)
}
getAllPromise()