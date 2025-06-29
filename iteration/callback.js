function b(y){
    console.log('I am in B')
    y()
}

b(function c(){
    console.log('I am in C')
})

function cal(a,b, operation){
    return operation (a,b)
}

console.log(cal(5,4,(x,y)=>5+5))