



function factorial(int) {
    let fact = 1;
    for (i = 1; i <= int; i++) {
        fact = fact * i;

    }

    return fact;
}

console.log(factorial(6))