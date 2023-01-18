
// named function
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

console.log(helloFunction('world'))
console.log(myFunction(() => 'test'))
