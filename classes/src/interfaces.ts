interface Person {
   name: string;
   hobby: string;
   introduce(str: string): void; // Function declaration. Return type is void
}

let me: Person = { name: 'Chima', hobby: 'Coding', introduce: console.log };
me.introduce("Hi there. I'm Chima");

// ------------ IMPLEMENTATION WITH CLASSES ----------------
interface Greetable {
   name: string;
   greet: () => void;
}

class Human implements Greetable {
   name: string;
   constructor(name: any) {
      this.name = name;
   }
   greet() {
      console.log('Hello', this.name);
   }
}

const myself = new Human('Divine');
myself.greet();

// ------------ INHERITANCE WITH INTERFACES ----------------
interface User {
   name: string;
}

interface Sporty extends User {
   bestSport: string;
}

class Footballer implements Sporty {
   constructor(public name: string, public bestSport: string = 'football') {
      this.name = name;
      this.bestSport = bestSport;
   }
   introduce() {
      console.log(`Here comes, ${this.name}, who loves ${this.bestSport}`);
   }
}
const messi = new Footballer('Messi');
messi.introduce();

// ------------ FUNCTION TYPES WITH INTERFACES ----------------
interface Greet {
   (text: string): void;
}

let sayHello: Greet = (firstName: string) => {
   console.log('Hello, dear', firstName);
};
sayHello('Chima');

// OPTIONAL PROPERTIES & PARAMETERS
interface Salutable {
   firstName?: string;
   salute: () => void;
}

class Someone implements Salutable {
   public firstName?: string;

   constructor(fName?: string) {
      if (fName) this.firstName = fName;
   }
   salute() {
      console.log('Hi', this.firstName || '');
   }
}

let david = new Someone();
david.salute(); // Hi

david = new Someone('David');
david.salute(); // Hi David
