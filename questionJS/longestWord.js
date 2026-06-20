


function longestWrd(str) {
    let word = str.split(" ")
    let longest = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longest.length) {
            longest = word[i]
        }
    }
    return longest
}

let word = "I love javascript programming"

console.log(longestWrd(word));
