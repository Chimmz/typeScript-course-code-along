"use strict";
let me = { name: 'Chima', hobby: 'Coding', introduce: console.log };
me.introduce("Hi there. I'm Chima");
class Human {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello', this.name);
    }
}
const myself = new Human('Divine');
myself.greet();
class Footballer {
    constructor(name, bestSport) {
        this.name = name;
        this.bestSport = bestSport;
        this.name = name;
        this.bestSport = bestSport;
    }
    introduce() {
        console.log(`Here comes, ${this.name}, who loves ${this.bestSport}`);
    }
}
const messi = new Footballer('Messi', 'football');
messi.introduce();
let sayHello = (firstName) => {
    console.log('Hello, dear', firstName);
};
sayHello('Chima');
class Someone {
    constructor(fName) {
        if (fName)
            this.firstName = fName;
    }
    salute() {
        console.log('Hi', this.firstName || '');
    }
}
let david = new Someone();
david.salute(); // Hi
david = new Someone('David');
david.salute(); // Hi David
