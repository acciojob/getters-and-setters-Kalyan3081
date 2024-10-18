class Person {
    // Constructor to initialize name and age
    constructor(name, age) {
        this._name = name;  // Using an underscore to indicate a private property
        this._age = age;
    }

    // Getter for the name property
    get name() {
        return this._name;
    }

    // Setter for the age property
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Please provide a valid age.');
        }
    }

    // Getter for the age property (optional, for checking age)
    get age() {
        return this._age;
    }
}

// Student class that extends the Person class
class Student extends Person {
    // Method specific to Student class
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class that extends the Person class
class Teacher extends Person {
    // Method specific to Teacher class
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
