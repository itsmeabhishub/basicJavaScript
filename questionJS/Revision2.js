

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