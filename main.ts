/// dars

// UNION

// type Shape = "circle" | "triangle" | "rectangle";

// function draw(shape: Shape) {
//   console.log(`Drawing a  ${shape}`)
// }

// draw("circle")   /// -correct-correct-correct-correct-correct-
// draw("square")   /// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

/// INTERSECTION

// type HasName = { name: string };
// type CanFly = { fly(): void };

// type Bird = HasName & CanFly;

// const sparrow: Bird = {
//   name: "Sparrow",
//   fly() {
//     console.log(`${this.name} is flying`);
//   },
// };

// sparrow.fly();

///

// interface User {
//     id: number
//     name: string
//     roles : string[]
//     preferences: {
//         theme: "dark" | "light"
//         language: string
//     }
// }

// const user: User = {
//     id: 1,
//     name: "John",
//     roles: ["admin", "editor" ],
//     preferences: {
//         theme: "dark",
//         language: "uz"
//     }
// }

// type User = {
//   id: number;
//   name: string;
//   roles: string[];
//   preferences: {
//     theme: "dark" | "light";
//     language: string;
//   };
// };

// const user: User = {
//   id: 1,
//   name: "John",
//   roles: ["admin", "editor"],
//   preferences: {
//     theme: "dark",
//     language: "uz",
//   },
// };

// interface User {
//   id: number;
//   name: string;
//   roles: string[];
// }

// interface User {
//   preferences: {
//     theme: "dark" | "light";
//     language: string;
//   };
// }

// const user: User = {
//   id: 1,
//   name: "John",
//   roles: ["admin", "editor"],
//   preferences: {
//     theme: "dark",
//     language: "uz",
//   },
// }

// interface User {
//   id: number;
//   name: string;
//   roles: string[];
// }

// interface NextUser extends User {
//   preferences: {
//     theme: "dark" | "light";
//     language: string;
//   };
// }

// const user: NextUser = {
//   id: 1,
//   name: "John",
//   roles: ["admin", "editor"],
//   preferences: {
//     theme: "dark",
//     language: "uz",
//   },
// };

// type User = {
//   id: number;
//   name: string;
//   roles: string[];
// };

// type NextUser = User & {
//   preferences: {
//     theme: "dark" | "light";
//     language: string;
//   };
// };

// const user: NextUser = {
//   id: 1,
//   name: "John",
//   roles: ["admin", "editor"],
//   preferences: {
//     theme: "dark",
//     language: "uz",
//   },
// };

// type User = {
//   id: number;
//   name: string;
// };

// const someValue: any = { id: 1, name: "ali" };

// const user = someValue as User;

// console.log(user.name);

// function myFunc<T>(a:T):T {
//     return a
// }

// console.log(myFunc<number>(1));
// console.log(myFunc<string>("hello"));
// console.log(myFunc<boolean>(true));

// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// const number = [1, 2, 3];
// const string = ["a", "b", "c"];

// console.log(getFirstElement<number>(number));
// console.log(getFirstElement<string>(string));

// function merge<T, U>(obj1: T, obj2: U): T & U {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }
// const person = {name: "ali"}

// const jon = {posotion: "developer"}

// const merget = merge(person, jon)

// console.log(merget);

// interface Box<T>{
//     content: T
// }

// const stringBox: Box<string> = {content: "hello"}

// const nimberBox: Box<number> = {content: 42}

// console.log(stringBox.content);
// console.log(nimberBox.content);

// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItem(index: number): T | undefined {
//     return this.data[index];
//   }
// }

// const stringStore = new DataStore<string>();

// stringStore.addItem("hello");
// stringStore.addItem("world");
// console.log(stringStore.getItem(0));

// const numberStore = new DataStore<number>();

// numberStore.addItem(1);
// numberStore.addItem(2);
// console.log(numberStore.getItem(0));

// / / / // / / / /

// function printLength<T extends { length: number }>(value: T): void {
//     console.log(value.length);
// }

// console.log(printLength("hello"));
// console.log(printLength([1, 2, 3]));
// console.log(printLength({ length: 10 }));

// console.log(printLength(123));  ///////////// error

// function createArray<T = string>(length: number, value : T): T[] {
//     return Array(length).fill(value)
// }

// const stringArray = createArray(3, "a")

// const numberArray = createArray<number>(3, 5)

// console.log(stringArray);
// console.log(numberArray);

//--------------------------------------------------------------

// HOMEWORK                                   ///////////////////////////////////////////////////

//--------------------------------------------------------------

// 1 - bo'lim

// 1 - masala

// function myFunc(variable:any):any  {
//     return variable
// }

// console.log(myFunc(1));
// console.log(myFunc("hello"));
// console.log(myFunc(true));
// console.log(myFunc({a:1, b:2, c:3}));
// console.log(myFunc([1,2,3]));

// generic function

// function myFunc<T>(variable:T):T {
//     return variable
// }

// console.log(myFunc(1));
// console.log(myFunc("hello"));
// console.log(myFunc(true));

// 2 - masala

// function getFirstElement<T>(array: T[]): T | string {
//   if (!array[0]) {
//     return "array is empty";
//   }
//   return array[0];
// }

// const a = [1, 2, 3];
// const x = [""]

// console.log(getFirstElement<number>(a));
// console.log(getFirstElement<string>(x));

// 3 - masala

// function getLastElement<T>(array:T[]):T | undefined {
//     return array.reverse()[0]
// }

// console.log(getLastElement([1,2,3]));
// console.log(getLastElement(["a", "b", "c"]));

// 4  - masala

// interface User<T> {
//   name: T;
//   age: T;
// }

// const user1: User<string | number> = { name: "ali", age: 20 };

// const user2: User<number | string> = { name: 42, age: "ali" };

// console.log(user1);
// console.log(user2);

// 5 - masala

// function printLength<T extends { length: number }>(value: T): {message: string} {
//     if (value.length) {
//         return {
//             message: `length of ${value} is ${value.length}`
//         }
//     }
//     return {
//         message: `length of ${value} is ${value.length}`
//     }
// }

// console.log(printLength("hello"));
// console.log(printLength([1, 2, 3]));
// console.log(printLength({ length: 10 }));
// console.log(printLength(""));

// 6 - masasala

// function myFunc<T extends number>(array: T[]): {message: string} {
//     if (array.length === 0) {
//         return {
//             message: "array is empty"
//         }
//     }else{
//         return {
//             message: `the smallest number is: ` + array.sort()[0]
//         }
// }
// }
// console.log(myFunc([17, 21, 30]));
// console.log(myFunc([390, 200, 11]));

// 2 - bo'lim

// 1 - masala

// function mergeObjects<T extends object, U extends object>(object1:T, object2: U): T & U {
//     return {
//         ...object1,
//         ...object2
//     }
// }

// const user1 = {
//     name: "ali",
//     age: 20
// }
// const user2 = {
//     language: "uz",
//     country: "Uzbekistan"
// }
// console.log(mergeObjects(user1, user2));

// 2 - masala

// function sort<T extends (number | string)>(array : T[]): T[] {
//     return array.sort((a, b) => a > b ? 1 : -1)
// }
// console.log(sort([13, 1, 7, 3, 9, 20]));
// console.log(sort(["w", "g", "a", "z", "d"]));

// 3 - masala

// interface Product {
//   product: string;
//   price: string;
// }

// const database: Product[] = [];

// type CrudType = "c" | "r" | "u" | "d";

// function crud(type: CrudType, data?: Product): { message: string } | Product[] {
//   if (type === "c" && data) {
//     database.push(data);
//     return {
//       message: "product created",
//     };
//   } else if (type === "r") {
//     return database;
//   } else if (type === "u") {
//     return {
//       message: "product updated",
//     };
//   } else if (type === "d") {
//     return {
//       message: "product deleted",
//     };
//   }
//   return { message: "invalid operation" };
// }

// console.log(crud("c", { product: "apple", price: "5000" }));
// console.log(crud("r"));

// 4 - masala

// class myCrudFunc<T>{
//     private values: T[ ] = []

//     add(value:T):void{
//         this.values.push(value)
//     }

//     delete(value:T): void {
//         this.values = this.values.filter(e => e !== value)
//     }

//     length(): number {
//         return this.values.length
//     }

//     getAll():T[]{
//         return this.values
//     }

// }

// const names =  new myCrudFunc<string>()
// names.add("toni")
// names.add("sony")
// names.add("gony")
// names.delete("gony")
// console.log(names.length());
// console.log(names.getAll());

// const users = new myCrudFunc<{ name: string }>();

// users.add({ name: "Ali" });
// users.add({ name: "Sara" });

// console.log(users.getAll());

// console.log(users.length());

// 5 - masala

// function myFunc<T extends string | number>(array: T[]): T[] {
//     const result: T[] = [];
//     for (const el of array) {
//         typeof el === "number" ? result.push((el*2) as T) : result.push(el)
//     }
//     return result
// }

// console.log(myFunc([10, "world", 3]));

// 6 - masala

// function unique<T>(array: T[]): T[] {
//   let arr: T[] = [];
//   for (const el of array) {
//     if (!arr.includes(el)) {
//       arr.push(el);
//     }
//   }
//   return arr
// }
// console.log(unique([10, 5, 3, 40, 40, 10, 2, 33, 3, 5]));
// console.log(unique(["b", "b", "c", "a", "e", "a", "b"]));
// console.log(unique([2, "a", 2, "a", 3, "a", 4, "d", 2, "z"]));

/// 3 - bo'lim

// 1 - masala /

// class KeyValueStore<T extends { key: string }> {
//   private values: T[] = [];

//   add(value: T): void {
//     this.values.push(value);
//   }

//   getByKey(key: string): T | string {
//     const found = this.values.find((e) => e.key === key);
//     return found ?? "not found";
//   }
// }

// const store = new KeyValueStore<{ key: string }>();

// store.add({ key: "a" });
// store.add({ key: "b" });
// store.add({ key: "c" });

// console.log(store.getByKey("a"));
// console.log(store.getByKey("d"));

// 2 - masala

// class Stacl<T>{
//     private values: T[] = []

//     addElement(value:T):void{
//         this.values.push(value)
//     }

//     deleteLastElement():T | undefined{
//         return this.values.pop()
//     }

//     getTopElement():T | undefined{
//         return this.values[this.values.length - 1]
//     }

//     getLength():number {
//         return this.values.length
//     }
// }

// const stack = new Stacl<number>()

// stack.addElement(1);
// stack.addElement(2);
// stack.addElement(3);
// stack.addElement(10);

// console.log(stack.getLength());
// console.log(stack.deleteLastElement());
// console.log(stack.getTopElement());

// 3 - masala

// function groupBy<T, K extends keyof T>(array: T[], key: K):Record<string, T[]> {
//     return array.reduce((result, item)=>{
//         const groupKey = String(item[key])
//     if (!result[groupKey]) {
//         result[groupKey] = []
//     }

//     result[groupKey].push(item)
//     return result

//     },
// {

// } as Record<string, T[]>
// )
// }

// const tasks = [
//   { title: 'Task 1', status: 'Pending' },
//   { title: 'Task 2', status: 'Done' },
//   { title: 'Task 3', status: 'Pending' }
// ];

// const grouped = groupBy(tasks, 'status');

// console.log(grouped);

// 4 - masala

// function myFunc<KEY extends string | number | symbol, VALUE>(
//   key: KEY,
//   value: VALUE,
// ): Record<KEY, VALUE> {
//         return {[key]: value} as Record<KEY, VALUE>
// }

// console.log(myFunc("name", "ali"));
// console.log(myFunc("age", 1));

// 5 - masala

// class limitArrayLength<T> {
//   private values: T[] = [];

//   constructor(private maxLength: number) {}

//   addValue(value: T): void {
//     if (this.values.length >= this.maxLength) {
//       return console.log("max length");
//       ;
//     }
//     this.values.push(value);
//   }

//   getAll():T[]{
//     return this.values
//   }
// }

// const arr = new limitArrayLength<string>(3)

// arr.addValue("a")
// arr.addValue("b")
// arr.addValue("c")
// arr.addValue("d")
// console.log(arr.getAll());

// 4 - bo'lim

// 1 - masala

// class Queue <T>{
//       private database: T[] = [];

//     addQueue(data:T):void{
//         this.database.push(data)
//     }

//     removeQueue():T | undefined{
//         return this.database.shift()
//     }

//     getFisrtPerson():T | undefined{
//         return this.database[0]
//     }

//     getQueueLength():number{
//         return this.database.length
//     }
// }

// const queue = new Queue<string>()

// queue.addQueue("ali")
// queue.addQueue("vali")
// queue.addQueue("hasan")

// console.log(queue.getFisrtPerson());
// console.log(queue.removeQueue());
// console.log(queue.getQueueLength());

// 2- masala

// interface Node<T> {
//   value: T;
//   children?: Node<T>[];
// }

// const tree: Node<number> = {
//   value: 1,
//   children: [
//     {
//       value: 2,
//       children: [
//         {
//           value: 3,
//         },
//       ],
//     },
//   ],
// };

// console.log(tree);

// 3 - masala

// function filterByType<T>(
//   array: unknown[],
//   predicate: (value: unknown) => value is T,
// ): T[] {
//   return array.filter(predicate);
// }

// const x = [1, "a", 2, false, "b", 3];

// const numbers = filterByType<number>(
//   x,
//   (e): e is number => typeof e === "number",
// );

// console.log(numbers);

// const strings = filterByType<string>(
//   x,
//   (e): e is string => typeof e === "string",
// );

// console.log(strings);

// const booleans = filterByType<boolean>(
//   x,
//   (e): e is boolean => typeof e === "boolean",
// );

// console.log(booleans);

// 4 - masala

// function myUnique<T>(array: T[]):T[] {
//     const res:T[] = []

//     for (const element of array) {
//         if (!res.includes(element)) {
//             res.push(element)
//         }
//     }
//     return res
// }

// console.log(myUnique([1, 20, 20, 4, "ali", "ali", 20, 33, "ali", 33, true, true]));

// 5- masala

// class OxirgiMasala<T extends string, U extends number> {
//   key: T;
//   value: U;
// static  database: { name: string; age: number }[] = [];
//   constructor(key: T, value: U) {
//     this.key = key;
//     this.value = value;
//   }

//   addUser() {
//     OxirgiMasala.database.push({ name: this.key, age: this.value });
//   }

//   static getAllUsers() {
//     return OxirgiMasala.database;
//   }
// }

// const user1 = new OxirgiMasala<string, number>("ali", 20);

// const user2 = new OxirgiMasala<string, number>("vali", 30);

// user1.addUser();
// user2.addUser();

// console.log(OxirgiMasala.getAllUsers());
