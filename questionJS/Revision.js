

function debouncee(fn, delay) {
    let timer;

    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {

            fn.apply(this, arg)
        }, delay);
    }
}

function greet(query) {
    console.log("Search", query)
}

const debo = debouncee(greet, 1000)
debo('Abh')
debo('Abhi')
debo('Abhish')
debo('Abhishe')
debo('Abbhishek')
debo('Abhishek Anand')

function throttlee() {

}