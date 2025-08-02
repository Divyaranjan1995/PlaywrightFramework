import { Page } from "@playwright/test";
import LeftMenuComponent from "../components/leftMenuComponent";
import TopMenuComponent from "../components/topMenuComponent";

class HomePage {
  private leftMenuComponent: LeftMenuComponent;
  private topMenuComponent: TopMenuComponent;

  constructor(private readonly page: Page) {
    this.leftMenuComponent = new LeftMenuComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }

  getLeftMenuComponent(): LeftMenuComponent {
    return this.leftMenuComponent;
  }

  getTopMenuComponent(): TopMenuComponent {
    return this.topMenuComponent;
  }
}

export default HomePage;
export { HomePage };
