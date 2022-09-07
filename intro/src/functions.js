"use strict";
// ---------------- FUNCTION RETURN TYPES ----------------------
// TS infers the return type to be undefined | { info: string }
function giveVotingRight(age) {
    if (age < 18)
        return;
    return { info: 'You have voting right' };
}
// ---------------- FUNCTION TYPES & CALLBACKS ----------------------
const add = (a, b) => a + b;
const sayHi = () => 'Hi there!';
// let sumTwo: Function; // Denotes that sum will be assigned a function
// sumTwo = add; // Valid
// sumTwo = sayHi; // Valid
// Denotes that 'sumTwo' will hold a function that accepts two args and returns a number
let sumTwo;
sumTwo = add; // Valid
const sayHello = (user, callback) => {
    return 'Hello ' + callback(user.name);
};
const myself = { name: 'Chima', id: 1 };
const greeting = sayHello(myself, myName => {
    return myName[0].toUpperCase() + myName.slice(1);
});
console.log(greeting);
function sumTwoParams(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return ('' + a).concat(b + '');
    return a + b;
}
const summation = sumTwoParams(1, 2);
console.log('Summation in overload: ', summation);
//# sourceMappingURL=functions.js.map