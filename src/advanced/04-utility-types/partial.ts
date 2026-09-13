interface User {
    name:String;
    age:number;
    email:string;

}

// All properties become optional
const updateUser : Partial<User> = {
    email:"beshilo@gmail.com",
    name: "Beshilo coding academy"
}

// see the result
console.log(updateUser);