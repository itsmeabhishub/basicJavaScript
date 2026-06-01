

function nonRepat(str){
    str= str.toLowerCase()
    for(i=0; i<str.length; i++){
        let isDuplicate= false
        for(j=i+1; j<str.length; j++){
            if(str[i] === str[j]){
                isDuplicate = true
            }
        }
        let isRepeat = false
        for(let k= 0; k<i; k++){
                if(str[k] === str [i]){
                    isRepeat =true
                }
        }
        
        if(!isDuplicate && !isRepeat){
            console.log(str[i]);
            return
        }
    }
    return -1
}

nonRepat('AbbhiiA')