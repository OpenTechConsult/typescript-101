"use strict";
var Coder = /** @class */ (function () {
    function Coder(name, music, age, lang) {
        if (lang === void 0) { lang = 'Typescript'; }
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    Coder.prototype.getAge = function () {
        return "Hello, I'm ".concat(this.age);
    };
    return Coder;
}());
var Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
