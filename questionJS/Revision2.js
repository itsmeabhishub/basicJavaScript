

function debounce(fn,delay){
        let timer
    return function(...args){
        clearInterval(timer)
        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}

function greet(name){
    console.log("Search", name); 
}

const debouncett = debounce(greet,2000)

debouncett('Ab')
debouncett('Abh')
debouncett('Abhi')
debouncett('Abhishek')

function throttle(fn,delay){
    let timer=0
    return function(...args){
        let now = Date.now()
        if(now-timer>=delay){
            timer= now;
            fn.apply(this, args)
        }
    }

}

function greet11(name){
    console.log("Throt", name);
    
}

const throtyyy= throttle(greet11,2000)

setInterval(() => {
    throtyyy('Abhi')
}, 200);