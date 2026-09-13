// String Container 

// function wrapString(val: string) {
//     return {
//         value: val, createdAt: new Date()
//     }
// }

// const stringBox = wrapString("Hello Beshilo coding Academy");

// console.log(stringBox);

// // Number Container 

// function wrapNumber(val: Number) {
//     return {
//         value: val, createdAt: new Date()
//     }
// }

// const NumberBox = wrapNumber(100);

// console.log(NumberBox);


// // Bolean Container 

// function wrapBoolean(val: Boolean) {
//     return {
//         value: val, createdAt: new Date()
//     }
// }

// const BooleanBox = wrapBoolean(true);

// console.log(BooleanBox);


// With generics 
// T - > a place holder for type

function wrap <T> (val: T) {
    return {
        value: val, createdAt: new Date()
    } }

const stringBox = wrap("Beshilo");

console.log(stringBox);

const numberBox = wrap(50);

console.log(numberBox);
const booleanBox = wrap(false);

console.log(booleanBox);