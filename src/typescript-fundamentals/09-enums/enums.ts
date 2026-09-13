enum Role {
    Admin,
    Teacher,
    Student
}

const userRole1: Role = Role.Student;
console.log("Role for student:", userRole1);
console.log("Studnet Role", Role.Student);

// admin 
const userRole2: Role = Role.Admin;
console.log("Role for admin:", userRole2);
console.log("Admin Role", Role.Admin)