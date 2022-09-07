"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const merged = mergeObjects({ name: 'Chi' }, { age: 21 });
console.log('Merged object:', merged);
// With Constraints
function joinStrings(str1, str2) {
    return str1.concat(str2);
}
const joined = joinStrings('Hel', 'lo');
console.log('Joined string:', joined);
// The 'keyof' constraint
function describeField(obj, key) {
    return [obj[key], typeof obj[key]];
}
let response = describeField({ 1: 1 }, 1);
console.log(response);
// interface SearchCriteria {
//    (): boolean
// }
// Generic Classes
class MyStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
        return this;
    }
    removeItem(criteria) {
        const itemIndex = this.data.findIndex(criteria);
        this.data.splice(itemIndex, 1);
        return this;
    }
    showStorage() {
        console.log(this.data);
    }
}
const intStorage = new MyStorage();
intStorage.addItem(5);
intStorage.addItem(4);
intStorage.removeItem(it => it === 4);
intStorage.showStorage();
const objectStorage = new MyStorage();
objectStorage.addItem({ name: 'Chi' }).addItem({ name: 'Div' });
objectStorage.removeItem((it) => it.name === 'Chi');
objectStorage.showStorage();
