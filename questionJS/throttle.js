

function throttle(fn, delay){
    let lastCall = 0

    return function(...args){
        const now =Date.now()

        if(now - lastCall >= delay){
            lastCall = now
            fn.apply(this, args)
        }
    }
}

function person(){
    console.log("Called at", Date.now());
}

const throt = throttle(person,1000)

setInterval(() => {
    throt()
}, 200);