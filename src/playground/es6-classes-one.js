
class Person {
    constructor(name = 'Annonymous', age = 0){
        this.name = name; 
        this.age = age; 
    }

    getGreeting(){
        //return "Hello my name is " + this.name + "!";
        return `Hello my name is ${this.name}!`;  
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age); 
        this.major = major; 
    }

    hasMajor(){
        return !!this.major; 
    }

    getDescription(){
        let description = super.getDescription(); 
        if (this.hasMajor()){
            description += ` and majors in ${this.major}`
        }
        return description; 
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age); 
        this.homeLocation = homeLocation; 
    }

    getGreeting(){
        let greeting = super.getGreeting(); 
        
        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;  
    }
}

const me = new Traveler('Jason MacCuaig', 29, 'London, ON');

console.log(me.getGreeting()); 
const other = new Traveler(); 
console.log(other.getGreeting());   