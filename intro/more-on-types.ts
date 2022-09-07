// INTERSECTION TYPES

type AppUser = { name: string };
type Admin = { privileges: string[] };

type Employee = AppUser & Admin;

const staff: Employee = {
   name: 'Stella',
   privileges: ['create-server', 'deployment']
};
console.log(staff);

type Age = number | string;
type Logic = number | boolean;
type Universal = Age & Logic; // The type is 'number' because thats the intersection of Age and Logic
