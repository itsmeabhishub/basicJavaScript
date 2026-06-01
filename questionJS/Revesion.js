
function reverseString(int){
    let res = 0;
    while(int>0){
        let num= int %10;
        res = res*10 + num;
        int= Math.floor(int/10)
    }
    return res;
}

console.log(reverseString(1211));

function reverseFunc(num){
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverseFunc(321));
 