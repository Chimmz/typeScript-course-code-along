function mergeObjects<A, B>(obj1: A, obj2: B) {
   return Object.assign(obj1, obj2);
}

const merged = mergeObjects({ name: 'Chi' }, { age: 21 });
console.log('Merged object:', merged);

// With Constraints
function joinStrings<A extends string, B extends string>(str1: A, str2: B) {
   return str1.concat(str2);
}
const joined = joinStrings('Hel', 'lo');
console.log('Joined string:', joined);

// The 'keyof' constraint
function describeField<A extends object, B extends keyof A>(
   obj: A,
   key: B
): [any, string] {
   return [obj[key], typeof obj[key]];
}
let response = describeField({ 1: 1 }, 1);
console.log(response);

// interface SearchCriteria {
//    (): boolean
// }
// Generic Classes
class MyStorage<Item> {
   private data: Item[] = [];

   addItem(item: Item) {
      this.data.push(item);
      return this;
   }
   removeItem<S extends (i: Item) => boolean>(criteria: S) {
      const itemIndex = this.data.findIndex(criteria);
      this.data.splice(itemIndex, 1);
      return this;
   }
   showStorage() {
      console.log(this.data);
   }
}
const intStorage = new MyStorage<number>();
intStorage.addItem(5);
intStorage.addItem(4);
intStorage.removeItem(it => it === 4);
intStorage.showStorage();

const objectStorage = new MyStorage();
objectStorage.addItem({ name: 'Chi' }).addItem({ name: 'Div' });
objectStorage.removeItem((it: any) => it.name === 'Chi');
objectStorage.showStorage();
