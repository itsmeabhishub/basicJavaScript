

function capatialWord(str){
    let word = str.split(" ")
    for(let i = 0; i<word.length; i++){
        word[i]=word[i][0].toUpperCase() + word[i].substring(1)
    }
    return word.join(" ")
}

console.log(capatialWord('hello world'));
console.log(capatialWord('hello world/n jessica'));
console.log(capatialWord('hello world'));
