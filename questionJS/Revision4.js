

function customCall(fn,obj,...arg){

    obj.temp=fn

    const result = obj.temp(...arg)
    delete obj.temp

    return result
}

const person={
    name:"Abhi"
}

function greet(city){
    console.log(this.name, city)
}

customCall(greet,person,'Jamui')