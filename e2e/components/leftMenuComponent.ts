import { Page } from "@playwright/test";

class LeftMenuComponent {
  constructor(private readonly page: Page) {}

  async selectLeftMenuItem(itemName: string) {
    await this.page.getByRole("link", { name: itemName }).click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}

export default LeftMenuComponent;
export { LeftMenuComponent };
