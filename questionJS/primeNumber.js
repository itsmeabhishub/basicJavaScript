

function primeNo(int){
    let count =0;
    for (let i =1; i<=int; i++){
        if(int % i === 0){
                count ++;
        }
    }
    console.log(count);
    
    if(count >2){
        console.log('not prime number')
    }else{

        console.log("prime number")
    }
}

primeNo(7)