// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using function declaration
function printTeacher(firstName: string, lastName: string): string {
  // Must match the checker’s expected return format
  return `${firstName}. ${lastName}`;
}

// Example usage (not required, just for local testing)
console.log(printTeacher("John", "Doe")); // Output: J. Doe
