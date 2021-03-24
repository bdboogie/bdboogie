function hello(firstName, lastName) {
    var fullname = ` Hello ${firstName} ${lastName}`
    return fullname
   
}
var sayFullName = hello('John', 'Megson')
console.log(sayFullName)
hello('Sam', 'Megson')
hello('Alice', 'Megson')

// Task 4
var currentTemperature = 10

function putOnCoat(temperature) {
    if (temperature <50 && temperature > 30) {
        console.log("put on coat");
    } else if (temperature <30 && temperature > 0) {
        console.log("put on coat and hat")
    } else if (temperature <0) {
        console.log("stay inside")    
    } else {
            console.log("Pants and vest are fine")
    }
}
putOnCoat(currentTemperature)
putOnCoat(60)