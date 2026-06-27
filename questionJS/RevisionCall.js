

function customCall(f1, object, ...arg) {
    object.temp = f1

    const result = object.temp(...arg)
    delete object.temp
    return result
}


function greet(city) {
    console.log(this.name, city)
}

const person = {
    name: "Abhishek"
}

customCall(greet, person, 'Jamui')
