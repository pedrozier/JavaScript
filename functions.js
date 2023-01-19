
//named function
function helloFunction(input) {
    const output = 'hello ' + input
    return output
}

//anonymous function
let x = (function () {
    console.log('anonymous function')
})

const hello = (input) => output

//higher order function
function myFunction(fun) {
    return fun()
}

//closures
function outer() {

    const constY = 'value'
    let count = 0

    function inner() {
        count++
        return `${count} ${constY}`
    }

    return inner
}

const fun = outer()

console.log(fun())
console.log(fun())
console.log(fun())
console.log(fun())
console.log(fun())

console.log(helloFunction('world'))
console.log(myFunction(() => 'test'))
