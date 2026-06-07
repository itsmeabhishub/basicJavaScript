


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