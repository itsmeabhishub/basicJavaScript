
function greet(city, state) {
    console.log(this.name, city, state);

}

const person1 = {
    name: 'Abhishek'
}

greet.apply(person1, ["Jamui", "Bihar"])


function myApply(fn, obj, arg = []) {
    obj.temp = fn

    const result = obj.temp(...arg)

    delete obj.temp

    return result
}

function greet1(city, state) {
    console.log(this.name, city, state);

}

myApply(greet, person1, ['Jamui', "bihar"])