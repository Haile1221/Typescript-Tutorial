interface User {
    name: String;
    age: number;
    email: string;
}

// Pick only name and email
type UserPreview = Pick<User, "name" | "email">;
const user:UserPreview ={
    name : "Beshilo coding Academy",
    email: "beshilo@Beshilo.com"

}

// See result 
console.log(user)