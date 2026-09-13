class Student {
    // properties     
    name : string;  
     age : number;
    //    constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // method 
    introduce():string{
        return `My name is ${this.name} and I am ${this.age} Years old`;
    }
}

const student1 = new Student("Haile", 30);
console.log(student1);
const student2 = new Student("Jony", 20);
console.log(student2);