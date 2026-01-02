"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utill_1 = require("./utill");
function hello(name) {
    console.log(`Hello ${name}`);
}
hello("Typescript");
let myString;
myString = "Hello! Typescript";
console.log("String", myString);
let myNumber;
myNumber = 123;
console.log("Number", myNumber);
let myBoolean;
myBoolean = true;
console.log("Boolean", myBoolean);
let myNull;
myNull = null;
console.log("Null", myNull);
let myAny;
myAny = "any는 아무거나 모든 타입";
console.log("Any string", myAny);
myAny = 123;
console.log("Any Number", myAny);
myAny = true;
console.log("Any Boolean", myAny);
(0, utill_1.printName)("typescript");
