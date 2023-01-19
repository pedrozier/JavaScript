
//const obj = new Object()


const obj = {

    name: 'name',
    value: 'value',
    number: 2,
    hello: function () {
        console.log(`hello ${this.name}`)
    },
    hello2: () => {
        console.log(`hello ${this.name}`)
    }
}

obj['name'] = 'new name'

obj.hello()

console.log(obj)

console.log('--------')

const objX = {
    name: 'name x'
}

const objY = {
    name: 'name y'
}

function hello() {
    return this.name
}

const result = hello.call(objY)

console.log(result)