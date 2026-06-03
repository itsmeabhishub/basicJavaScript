


function charOccurance(char){
    let obj={}
    for(let i = 0; i<char.length; i++){
       let ch= char[i]
        if(obj[ch]){
            obj[ch]++;
        }else{
            obj[ch]=1;
        }
}
return obj
}

console.log(charOccurance('Abhishek anand'))