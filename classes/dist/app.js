"use strict";
class Department {
    // name: string;
    // private students: string[] = []; // Makes students only accessible within the class
    // protected budget: number;
    // Shorthand property initialization
    constructor(name, budget, // 'budget' can be accessed only from within this class & child classes
    students = []) {
        this.name = name;
        this.budget = budget;
        this.students = students;
        this.name = name;
        this.students = students;
        this.budget = budget;
    }
    describe() {
        console.log(`There are ${this.students.length} students in ${this.name}`);
    }
    enrolNewStudent(stdName) {
        this.students.push(stdName);
    }
    get mostRecentlyEnrolledStudent() {
        return this.students.slice(-1).pop();
    }
}
const myDept = new Department('Computer', 5000);
const myOtherDept = {
    name: 'Maths',
    people: 50,
    describe: myDept.describe
};
// myOtherDept.describe(); // Gives an error because of this: Department on line 8
// myDept.students.push('Chima') // Error: students is a private field
myDept.enrolNewStudent('Mike');
myDept.describe();
// ---------------- INHERITANCE --------------------
class PhysicsDept extends Department {
    constructor(name, budget, practicals) {
        super(name, budget);
        this.numPracticals = practicals;
    }
}
const physics = new PhysicsDept('physics', 10000, 8);
console.log(physics);
physics.enrolNewStudent('Uju');
console.log('Last enrolled student in Phy class is:', physics.mostRecentlyEnrolledStudent);
