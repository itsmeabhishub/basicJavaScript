
let num = 121

function reverseNumber(num) {
    let originalNum = num;
    let res = 0;
    while (num > 0) {
        let div = num % 10;
        res = (res * 10) + div;
        num = Math.floor(num / 10)
    }
    if (originalNum === res) {
        console.log("pallindrome");

    }
    else {
        console.log("Not Pallindrome");

    }
}
reverseNumber(num)
