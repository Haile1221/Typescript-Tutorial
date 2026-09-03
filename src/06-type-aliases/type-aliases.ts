type Course = {
    id: number;
    title: string;
    price: number;
}

const course1: Course = {
    id: 1, title: "TypeScript", price: 50
}

console.log(course1);;
console.log(course1.title);

const course2: Course = {
    id: 2, title: "React", price: 60
}

console.log(course2);;
console.log(course2.title);
console.log(course2.price)