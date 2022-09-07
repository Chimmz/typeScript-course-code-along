// ---------------- FUNCTION RETURN TYPES ----------------------
// TS infers the return type to be undefined | { info: string }
function giveVotingRight(age: number) {
   if (age < 18) return;
   return { info: 'You have voting right' };
}

// ---------------- FUNCTION TYPES & CALLBACKS ----------------------
const add = (a: number, b: number) => a + b;
const sayHi = () => 'Hi there!';

// let sumTwo: Function; // Denotes that sum will be assigned a function
// sumTwo = add; // Valid
// sumTwo = sayHi; // Valid

// Denotes that 'sumTwo' will hold a function that accepts two args and returns a number
let sumTwo: (n1: number, n2: number) => number;
sumTwo = add; // Valid
// sumTwo = sayHi; // Gives error as sayHi returns a string

// CALLBACKS
type User = { name: string; id: number };

const sayHello = (user: User, callback: (name: string) => string) => {
   return 'Hello ' + callback(user.name);
};
const myself: User = { name: 'Chima', id: 1 };

const greeting = sayHello(myself, myName => {
   return myName[0].toUpperCase() + myName.slice(1);
});
console.log(greeting);

//--------- FUNCTION OVERLOADING --------------
type Sumable = number | string;

function sumTwoParams(a: number, b: number): number;
function sumTwoParams(a: number, b: string): string;
function sumTwoParams(a: string, b: number): string;

function sumTwoParams(a: Sumable, b: Sumable) {
   if (typeof a === 'string' || typeof b === 'string')
      return ('' + a).concat(b + '');
   return a + b;
}
const summation = sumTwoParams(1, 2);
console.log('Summation in overload: ', summation);
