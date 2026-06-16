const person1 = {
    name: "Abhishek"
}

function greet() {
    console.log(this.name);

}

greet.call(person1)

function myCall(fn, object, ...args) {

    object.temp = fn;
    const result = object.temp(...args);

    delete object.temp
    return result

}

function greet1(city) {
    console.log(this.name, city);
}

const user = {
    name: "Abhishek"
}

myCall(greet1, user, "Jamui")