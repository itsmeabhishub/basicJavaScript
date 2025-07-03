const p = new Promise((resolve, reject)=>{
    // return resolve('Hi Abhishek, its succesful')
    return reject('Hi Abhishek, its unsuccesful')
})

const getCart = async()=>{
    const result = await p.then(res=>{
        return res
    } )
    .catch((err)=>{
        console.log(err)
    })
    console.log(result)
}

getCart()