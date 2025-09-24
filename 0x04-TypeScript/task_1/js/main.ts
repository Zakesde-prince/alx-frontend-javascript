// Interface describing constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
console.log(printTeacher("John", "Doe"));   // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
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
