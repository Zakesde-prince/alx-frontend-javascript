// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // readonly, can only be set when creating
  readonly lastName: string;         // readonly, can only be set when creating
  fullTimeEmployee: boolean;         // required
  location: string;                  // required
  yearsOfExperience?: number;        // optional
  [key: string]: any;                // allow any additional properties
}

// Example usage
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
  contract: true,  // additional property allowed
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
};

const teacher3: Teacher = {
  firstName: "Mike",
  lastName: "Brown",
  fullTimeEmployee: true,
  location: "Paris",
  contract: false,  // additional property
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
