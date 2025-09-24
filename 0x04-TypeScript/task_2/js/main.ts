// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if ((typeof salary === "number" && salary < 500)) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
console.log(createEmployee(200));    // Teacher instance
console.log(createEmployee(1000));   // Director instance
console.log(createEmployee("$500")); // Director instance

// Optional: You can log the methods to verify behavior
const employee1 = createEmployee(200);
if (employee1 instanceof Teacher) {
  console.log(employee1.workFromHome());     // Cannot work from home
  console.log(employee1.getCoffeeBreak());   // Cannot have a break
  console.log(employee1.workTeacherTasks()); // Getting to work
}

const employee2 = createEmployee(1000);
if (employee2 instanceof Director) {
  console.log(employee2.workFromHome());       // Working from home
  console.log(employee2.getCoffeeBreak());     // Getting a coffee break
  console.log(employee2.workDirectorTasks());  // Getting to director tasks
}
