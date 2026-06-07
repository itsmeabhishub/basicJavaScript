


function debounce(fn, delay) {
    let timer
    return function(...arg){
        clearInterval(timer)
       timer= setTimeout(() => {  
            fn.apply(this,arg)
        }, delay);

    }
}

function greet(name){
        console.log("Seraching",name);
        
}

const debouncrer= debounce(greet,2000)

debouncrer("Ab")
debouncrer("Abh")
debouncrer("Abhi")
debouncrer("Abhis")
debouncrer("Abhishek")



function throtte(fn,delay){
    let lastcall = 0;

    return function(...arg){
        now= Date.now()
        if( now - lastcall >= delay){
            lastcall = now;
            fn.apply(this,arg)
        }
    }
}

function greety(query){
    console.log("Query", query);
}

const throty= throtte(greety,2000)

setInterval(() => {
    throty('Abhishek')
}, 200);