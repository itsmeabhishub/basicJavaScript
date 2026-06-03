

function mybind(f1, context, ...arg){
    return function (...runtimeArg){
        return f1.call(context, ...arg, ...runtimeArg)
    }
}

function greet(city) {
    console.log(this.name, city)
}

const person = {
    name:"Abhishek"
}

const boundFn = mybind(greet, person, "Jamtara")

boundFn()