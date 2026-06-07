

function customApply(fn, obj, arg=[]){

   obj.temp=fn
   const result = obj.temp(...arg)

   delete obj.temp

return result

}

const person1={
    name:"Avhishek"
}

function greet(city, state){
    console.log(this.name, city, state);  
}

const applyFn= customApply(greet,person1,[ "Jamui",'Bihar'])