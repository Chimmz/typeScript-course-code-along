// export {};

function greet(name: string, isMarried: boolean) {
   console.log(
      `Hello, ${name}. ${
         isMarried ? 'Do you have children yet?' : 'Please get married soon'
      }`
   );
}

const me: string = 'Chima'; // Redundant. TS can detect that 'Chima' is a string through type inference
let isMarried: boolean;
isMarried = false;

greet(me, isMarried);

let person: object = { name: 'Chima', isMarried: false }; // person is an object of type object (generic object)
// console.log(person);

let person2: { name: string; }; // Similar kind of declaration as: let name: string;
person2 = { name: 'Chima' };

console.log(person2);

//----------------- ARRAYS AND TUPULES -------------------
// TypeScript marks the 'fullName' field is a Tupule type
let someone: {
   fullName: [string, string];
   age: number;
   friends: string[];
   bestFriends: [{ name: string }, { name: string }];
} = {
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
enum Role {
   USER, // Value is 0
   ADMIN, // Value is 1
   SUPER_ADMIN // Value is 2
}
let myRole = Role.USER;
console.log(myRole); // Value is 0

// ---------------- Literal Types -------------------
const printWord = (word: 'one' | 'two') => {
   // Expect an arg whose value is either 'one' or 'two'
   // if (word === 'three') console.log("This is neither 'one' nor 'two'"); // Error
   console.log('Word arg = ', word);
};
printWord('one');

// ---------------- Custom Types / Type Aliases -------------------
type BabyAge = 'one' | 'two' | 'three' | 1 | 2 | 3;

function printAge(age: BabyAge) {
   console.log('This age is: ', age);
}
printAge(2);

// THE 'noImplicitReturns' CONFIG OPTION: Ensures that all branches in the code have a return statement
function doubleParam(param: any) {
   if (typeof param === 'number') return param * 2; // Has a return
   if (typeof param === 'string') return param.repeat(2);
   return;
}
