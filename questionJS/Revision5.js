


function customBind(fn,obj,...args){

    return function(...runTime){
        fn.call(obj,...args,...runTime)
    }
}

const person={
    name:"Abhishek"
}

function greet(city, state){
console.log(this.name, city, state);
}

const bind=customBind(greet,person,"Jamui")

bind('bihar')