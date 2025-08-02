import { Page, expect, Locator } from "@playwright/test";
import { EmployeeDetails } from "../testData/orangeHrmInterfaces";

class AddEmployeePage {
  private readonly page: Page;

  private readonly firstNameInput: Locator;
  private readonly middleNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators after `this.page` is available
    this.firstNameInput = this.page.getByRole("textbox", {
      name: "First Name",
    });
    this.middleNameInput = this.page.getByRole("textbox", {
      name: "Middle Name",
    });
    this.lastNameInput = this.page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = this.page.getByRole("button", { name: "Save" });
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async fillMiddleName(middleName: string) {
    await this.middleNameInput.fill(middleName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async clickSaveButton() {
    await this.saveButton.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async verifySuccessMessage() {
    await expect(this.page.getByText(/Successfully/i)).toBeVisible();
  }

  async addEmployeeDetailsAndSave(
    firstName: string,
    middleName: string,
    lastName: string,
  ) {
    await this.fillFirstName(firstName);
    await this.fillMiddleName(middleName);
    await this.fillLastName(lastName);
    await this.clickSaveButton();
  }

  async addEmployeeDetailsFromFakerAndSave(employeeDetails: EmployeeDetails) {
    await this.fillFirstName(employeeDetails.firstName);
    await this.fillMiddleName(employeeDetails.middleName);
    await this.fillLastName(employeeDetails.lastName);
    await this.clickSaveButton();
  }
}

export default AddEmployeePage;
export { AddEmployeePage };
