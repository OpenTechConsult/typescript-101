"use strict";
// Literal Types
var myName;
myName = 'Sandro';
var userName;
userName = 'Amy';
// functions
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
var subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
var multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (c === void 0) { c = 2; }
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest parameters
var total = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return a + nums.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(1, 2));
// Never type
var createError = function (errMsg) {
    throw new Error(errMsg);
};
// custom type guard
var isNumber = function (value) {
    return typeof value === 'number' ? true : false;
};
// use of the never type
var numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
