"use strict";
var stringArr = ['one', 'hey', 'Sandro'];
var guitars = ['Strat', 'Les Paul', 5150];
var mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
mixedData = guitars;
var test = [];
var bands = [];
bands.push('Van Helen');
// Tuple
var myTuple = ['Dave', 42, true];
var mixed = ['John', 1, false];
myTuple[1] = 42;
// Objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
var exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop2 = false;
exampleObj.prop1 = 'John';
var evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
var jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
console.log(evh);
// evh.age = 40
var greetGuitarist = function (guitarist) {
    // return `Hello ${guitarist.name?.toUpperCase()}`
    if (guitarist.name) {
        return "Hello ".concat(guitarist.name.toUpperCase());
    }
};
console.log(greetGuitarist(jp));
var lewis = {
    name: 'Lewis',
    active: true,
    albums: [1986, 'I love hoo'],
};
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
