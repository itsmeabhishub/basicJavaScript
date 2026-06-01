

function armStrng(int){
    let mainNum= int;
    let res = 0;
    let digits = String(int).length
    while(int>0){
        let num=int%10;
        res += num ** digits;
        int = Math.floor(int/10)
    }
    console.log(res);
    console.log(mainNum);
    
    if (res === mainNum) {
        console.log("Number is armstrong")
    }else{
        console.log("Number is not armstrong")
    }
    
}
armStrng(154)