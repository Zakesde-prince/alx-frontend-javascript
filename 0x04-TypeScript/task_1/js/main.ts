// Teacher interface from Task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Example Teacher objects
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
  contract: true,
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
};

console.log("Teachers:");
console.log(teacher1);
console.log(teacher2);

// Directors interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;  // required attribute for Directors
}

// Example Director object
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log("Directors:");
console.log(director1);
