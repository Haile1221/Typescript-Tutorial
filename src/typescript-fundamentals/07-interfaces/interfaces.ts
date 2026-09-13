interface User {
    name: string;
    age: number;
}

let use1: User = {
    name: "beshilo",
    age: 25
}
console.log(use1);
console.log(use1.name);

let use2: User = {
    name: "Jony",
    age: 30
}

console.log(use2);
console.log(use2.name);

// to understand about extends

interface Person {
    name: string;
}

interface Student extends Person { grade: number }

let student1: Student = {
    name: "Beshilo", grade: 3
}

console.log(student1)
console.log(student1.name);
console.log(student1.grade)