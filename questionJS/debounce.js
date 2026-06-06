

function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer)

        timer= setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

function greet(name){
    console.log(`Hello ${name}`)
}

const debounceGreet = debounce(greet,1000)

debounceGreet("Abhishek")