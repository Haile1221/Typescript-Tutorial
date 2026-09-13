interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}
// Remove password 

type SafeUser = Omit<User, "password">;

const user: SafeUser = {
    id: 1,
    name: "Beshilo",
    age : 20,
    email: "beshilo@gmail.com"
};

// see output 
console.log(user)