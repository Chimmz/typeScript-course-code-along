"use strict";
// export {};
function greet(name, isMarried) {
    console.log(`Hello, ${name}. ${isMarried ? 'Do you have children yet?' : 'Please get married soon'}`);
}
const me = 'Chima'; // Redundant. TS can detect that 'Chima' is a string through type inference
let isMarried;
isMarried = false;
greet(me, isMarried);
let person = { name: 'Chima', isMarried: false }; // person is an object of type object (generic object)
// console.log(person);
let person2; // Similar kind of declaration as: let name: string;
person2 = { name: 'Chima' };
console.log(person2);
//----------------- ARRAYS AND TUPULES -------------------
// TypeScript marks the 'fullName' field is a Tupule type
let someone = {
    fullName: ['Chima', 'Orji'],
    age: 21,
    friends: ['Peter', 'Obi'],
    bestFriends: [{ name: 'John' }, { name: 'James' }]
};
console.log(someone);
// Valid. TS cannot catch this error since Tupules translate to JS arrays (which have the .push) after compilation.
someone.fullName.push('Divine');
// TS only ensures that the 'fullName' must be an ARRAY(2), and the members are of correct types
// someone.fullName = true; // Gives an error
// someone.fullName = [3, 'Chima']; // Gives an error
//----------------- ENUMS -------------------
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 2] = "SUPER_ADMIN"; // Value is 2
})(Role || (Role = {}));
let myRole = Role.USER;
console.log(myRole); // Value is 0
// ---------------- Literal Types -------------------
const printWord = (word) => {
    // Expect an arg whose value is either 'one' or 'two'
    // if (word === 'three') console.log("This is neither 'one' nor 'two'"); // Error
    console.log('Word arg = ', word);
};
printWord('one');
function printAge(age) {
    console.log('This age is: ', age);
}
printAge(2);
// THE 'noImplicitReturns' CONFIG OPTION: Ensures that all branches in the code have a return statement
function doubleParam(param) {
    if (typeof param === 'number')
        return param * 2; // Has a return
    if (typeof param === 'string')
        return param.repeat(2);
    return;
}
//# sourceMappingURL=app.js.map