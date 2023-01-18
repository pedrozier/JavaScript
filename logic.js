// (!) Logical NOT  // (&&) Logical AND  // (||) Logical OR 
// (==) Abstract Comparison "Try to convert type before compare"  // (===) Strict equality "Compare the type and the value"

var x = {}
var z = !!!!!true

x['x1'] = 'value1'
x['x2'] = 'value2'

if (z) {
    x['x3'] = 'z is true'
} else {
    x['x3'] = 'z is false'
}

var expression = 'cat'

switch (expression) {
    case 'dog':
        console.log('it\'s a dog')
    case 'cat':
        console.log('it\'s a cat')
}

console.log('------')

var w = z ? 1 : 2
var y = String('this is a string wrapper')

console.log(x)
console.log(y)
console.log(z)
console.log(w)

console.log('------')

console.log(true)

console.log('------')

console.log(!![])
console.log(!!{})

console.log('------')

console.log(!!'')
console.log(!!'hi')

console.log('------')

console.log(!!0)
console.log(!!-1)
console.log(!!1)

console.log('------')

try {
    console.log('works')
} catch (error) {
    console.log(error)
}

console.log('------')