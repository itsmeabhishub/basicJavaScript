

function revStr(str){
    return(str.toString().split("").reverse().join())
}

console.log(revStr('abhi'));

function reverStringLoop(str){
    let res = ""
    for(let i = str.length - 1; i>=0; i--){
        res += str[i]
    }
    return res;
}

console.log(reverStringLoop('abhishek'))