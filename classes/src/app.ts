class Department {
   // name: string;
   // private students: string[] = []; // Makes students only accessible within the class
   // protected budget: number;

   // Shorthand property initialization
   constructor(
      public readonly name: string,
      protected budget: number, // 'budget' can be accessed only from within this class & child classes
      private students: string[] = []
   ) {
      this.name = name;
      this.students = students;
      this.budget = budget;
   }

   describe(this: Department) {
      console.log(`There are ${this.students.length} students in ${this.name}`);
   }
   enrolNewStudent(stdName: string) {
      this.students.push(stdName);
   }
   get mostRecentlyEnrolledStudent() {
      return this.students.slice(-1).pop();
   }
}

const myDept: Department = new Department('Computer', 5000);

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
   private numPracticals: number;

   constructor(name: string, budget: number, practicals: number) {
      super(name, budget);
      this.numPracticals = practicals;
   }
}
const physics = new PhysicsDept('physics', 10000, 8);
console.log(physics);
physics.enrolNewStudent('Uju');
console.log(
   'Last enrolled student in Phy class is:',
   physics.mostRecentlyEnrolledStudent
);
