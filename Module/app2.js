import {add, subtract} from "./operations.js";
import User from "./userProfile.js";

const person = new User("John Doe", 24);

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(person)