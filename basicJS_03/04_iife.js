(function chai(){
    console.log(`DB connected`)
})();
((name) =>{
    console.log(`DB connected Two ${name}`)
})('Abhi');

//Note special:- we need to provide semicolon otherwise the code excuter not able know where to stop this will give errore without semi colon

//Avoid polluting the global scope
//create private varible
//excute code immediately