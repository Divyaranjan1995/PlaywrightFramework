import { EmployeeDetails } from "./orangeHrmInterfaces";
import { faker } from "@faker-js/faker";

export function getRandomEmployeeDetails(): EmployeeDetails {
  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };
}
