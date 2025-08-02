import { expect, test } from "@playwright/test";
import { Env } from "@e2e/frameworkConfig/env";
import LoginPage from "@e2e/pages/loginPage";
import HomePage from "@e2e/pages/homePage";
import AddEmployeePage from "@e2e/pages/addEmployeePage";
import { getRandomEmployeeDetails } from "@e2e/testData/random";

test("Add Employee", async ({ page }) => {
  if (!Env.USER || !Env.BASE_URL || !Env.PASSWORD) {
    throw new Error(
      "Required environment variables (URL, USERNAME, PASSWORD) are not set.",
    );
  }

  await page.goto(Env.BASE_URL);

  const loginPage = new LoginPage(page);
  await loginPage.login(Env.USER, Env.PASSWORD);

  const homePage = new HomePage(page);
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  const addEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.addEmployeeDetailsFromFakerAndSave(
    getRandomEmployeeDetails(),
  );
  await addEmployeePage.verifySuccessMessage();

  await expect(page.getByText(/Successfully/i)).toBeVisible();

  //added comment --- testing
});
