

function analogy(char, res){
    let obj={}
    let obj2={}
    for (let i = 0; i< char.length; i++){
        let ch = char [i]
        if(obj[ch]){
            obj[ch]++
        }else{
            obj[ch]=1
        }
        }
    
    for (let j = 0; j< res.length; j++){
        let ch = char [j]
        if(obj2[ch]){
            obj2[ch]++
        }else{
            obj2[ch]=1
        }
        }
        for(key in obj){
            if(obj[key] !== obj2[key]){
                console.log(false)
          
                return
        }}
        console.log(true);
        
    }
    analogy('Abhi','Aib')

