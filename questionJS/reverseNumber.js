

function revfunc(num){
    return Number(num.toString().split("").reverse().join(""))
}
console.log(revfunc(12345));


function revfuncLoop(num){
    let n = 0
    while(num>0){
            let rem = num%10;
            n = n*10 + rem;
            num= Math.floor(num/10)
    }
    return n;
}
console.log(revfuncLoop(1234567));


