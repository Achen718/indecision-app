
class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
        // parent class
    }
    getGreeting() {
        // return 'Hello. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}
// subclass Student,
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);//calls parent class = Person
        this.major=major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        // adds onto getDescription
        if(this.major) {
            description += `Their major is ${this.major}.`;
        }

        return description;
    }
}
// subclass Traveler
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += `I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}


const me = new Traveler('Andrew Mead', 26, 'Virginia');
console.log(me.getGreeting());

const other = new Student(undefined, 10, 'Computer Science');
console.log(other.getDescription());