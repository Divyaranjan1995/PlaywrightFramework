import { test, expect } from '@playwright/test';
import { Env } from '../../frameworkConfig/env';

test('Add Employee', async ({ page }) => {
  if (!Env.USER || !Env.BASE_URL || !Env.PASSWORD) {    throw new Error(
      'Required environment variables (URL, USERNAME, PASSWORD) are not set.',
    );
  }

  var a;

  await page.goto(Env.BASE_URL);
  await page.getByRole('textbox', { name: 'Username' }).fill(Env.USER);
  await page.getByRole('textbox', { name: 'Password' }).fill(Env.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Divya');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Ranjan');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Padhiary');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(/Successfully/i)).toBeVisible();

  //added comment --- testing
});
