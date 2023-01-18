
x = 'new value'

x = 'reassigned value'

var g = 'global' // variable scope

function app() {
    var l = 'local'
    console.log(g)
}

app()

console.log(varX)

if (true) {
    var varX = 'var'
    let letX = 'let' // (let/const) "limited to the scope"
    const constX = 'const'

    letX = 'new let'

    //constX = 'new const' // Assignment to constant variable
}

console.log(varX)
//console.log(letX)    /// letX is not defined
//console.log(constX) // constX is not defined

var x // (variables/functions) Hoisting "Put on top before execution"