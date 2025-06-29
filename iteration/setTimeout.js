function x(){
    
    for (var i=1; i<= 5; i++){
        (function closure(x){
        setTimeout(function(){
        console.log(x)
        }, x * 1000)
            }
        )(i);
    }

    console.log('Abhis',i);
    
}
x()