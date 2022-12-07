let stringArr = ['one', 'hey', 'Sandro']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')


guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
mixedData = guitars

let test = []

let bands: string[] = []
bands.push('Van Helen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop2 = false
exampleObj.prop1 = 'John'

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp
console.log(evh)

// evh.age = 40

const greetGuitarist = (guitarist: Guitarist) => {
    // return `Hello ${guitarist.name?.toUpperCase()}`
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
}

console.log(greetGuitarist(jp))

interface Guitarist2 {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let lewis: Guitarist2 = {
    name: 'Lewis',
    active: true,
    albums: [1986, 'I love hoo'],
}

// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)