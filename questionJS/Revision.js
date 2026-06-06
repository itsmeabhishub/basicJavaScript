

function debouncee(fn, delay) {
    let timer;

    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {

            fn.apply(this, arg)
        }, delay);
    }
}

function greet(query) {
    console.log("Search", query)
}

const debo = debouncee(greet, 1000)
debo('Abh')
debo('Abhi')
debo('Abhish')
debo('Abhishe')
debo('Abbhishek')
debo('Abhishek Anand')

function throttlee(fn, delay) {
let lastCall = 0;

return function(...args){
    now= Date.now()
    if(now-lastCall >= delay ){
        lastCall=now;
        fn.apply(this,args)
    }
}
}

function greetT(message){
    console.log("Sending message" , message);
    
}

const throt = throttlee(greetT,2000)

setInterval(() => {
    throt("Abhishek")
}, 200);