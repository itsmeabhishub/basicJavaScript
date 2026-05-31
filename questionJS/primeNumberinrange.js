

function primeNo(number){
    let count = 0
    for(let i = 2; i<= number; i++){
        for (let j = 1; j<=number; j++){
            if(i % j === 0){
                count++;
            }
        }
        
        if(count > 2){
            console.log(`${i} is Not prime number`);
        } else{
            console.log(`${i} prime number`);
        }
        count = 0;
    }
}

primeNo(7)