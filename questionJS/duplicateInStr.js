

function dupliChar(str){
    let count = 0;
    str=str.toLowerCase()
    for(i = 0; i<str.length; i++){
        let isDuplicate= false
        for(j= i + 1; j<str.length; j++){
            if(str[i] === str[j]){
                isDuplicate= true
                break
            }
        }
        let isPresent =  false;
        for(let k=0; k<i; k++){
            if(str[k]===str[i]){
                isPresent= true;
                break;
            }
        }
        if(isDuplicate && !isPresent){
            console.log(str[i]);
            
        }
    }
}
dupliChar('success')