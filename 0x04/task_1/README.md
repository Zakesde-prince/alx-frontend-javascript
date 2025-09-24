# Task 1: Creating a Teacher Interface

## Overview

This project demonstrates advanced TypeScript interface features:

- Defining `readonly` properties
- Required and optional properties
- Index signatures to allow dynamic attributes
- Using interfaces to type objects

---

## Project Structure


---

## Teacher Interface

- `firstName` (string) – readonly, can only be set when creating the object
- `lastName` (string) – readonly, can only be set when creating the object
- `fullTimeEmployee` (boolean) – required
- `location` (string) – required
- `yearsOfExperience` (number) – optional
- `[key: string]: any` – allows adding any additional property dynamically, e.g., `contract`

---

## Example Usage

```ts
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
  contract: true,
};

console.log(teacher1);

// Output in console:
// {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   location: "New York",
//   yearsOfExperience: 5,
//   contract: true
// }
