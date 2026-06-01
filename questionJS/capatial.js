

function capatialWord(str){
    let word = str.split(/\s+/)
    for(let i = 0; i<word.length; i++){
        word[i]=word[i][0].toUpperCase() + word[i].substring(1)
    }
    return word.join(" ")
}

console.log(capatialWord('hello world'));
console.log(capatialWord('hello world\njessica'));
console.log(capatialWord('hello world'));
