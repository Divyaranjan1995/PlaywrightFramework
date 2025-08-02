import { Page } from "@playwright/test";

class TopMenuComponent {
  constructor(private readonly page: Page) {}

  async selectTopMenuItem(itemName: string) {
    await this.page.getByRole("link", { name: itemName }).click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}

export default TopMenuComponent;
export { TopMenuComponent };
