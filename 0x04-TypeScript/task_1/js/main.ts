// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the required function declaration
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage (not required, but helps test locally)
console.log(printTeacher("John", "Doe")); // Output: J. Doe
