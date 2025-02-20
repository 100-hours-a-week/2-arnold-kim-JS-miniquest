class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is %s and I am %d years old.", this.name, this.age);
    }
}

const person = new Person("Jane Doe", 25);

person.greet()