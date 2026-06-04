

function customBind(f1, context, ...arg){

    return function(...runtimeArg){
        return f1.call(context, ...arg, ...runtimeArg)
    } 
}

function greet(city, state){
    console.log(this.name,city, state);
    
}

const people={
    name:"Abhishek"
}

const bounFn= customBind(greet,people,"Jamui")

bounFn('Bihar')