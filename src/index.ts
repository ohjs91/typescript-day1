import { printName } from "./utill";

function hello(name: string) {
  console.log(`Hello ${name}`);
}

hello("Typescript");

let myString: string;
myString = "Hello! Typescript";
console.log("String", myString);

let myNumber: number;
myNumber = 123;
console.log("Number", myNumber);

let myBoolean: boolean;
myBoolean = true;
console.log("Boolean", myBoolean);

let myNull: null;
myNull = null;
console.log("Null", myNull);

let myAny: any;
myAny = "any는 아무거나 모든 타입";
console.log("Any string", myAny);
myAny = 123;
console.log("Any Number", myAny);
myAny = true;
console.log("Any Boolean", myAny);

printName("typescript");
