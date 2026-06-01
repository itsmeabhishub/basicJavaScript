

function countVowelandconst(str){
    let vowel = 0;
    let conso = 0;
    
    str=str.toLowerCase()

    for(let i = 0; i< str.length; i++){

        if(/[a-z]/.test(str[i])){
        
        if(str[i] ==='a'|| str[i] === 'e' || str[i] ==='i'  ||str[i] ==='o'  || str[i] ==='u'){
            vowel ++; 
            console.log(str[i]);
            
        }else{
            conso++
        }
    }
    }
    console.log('vowel', vowel)
    console.log('consonent', conso)
}

countVowelandconst('Abhishek 123')