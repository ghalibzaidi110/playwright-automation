export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login");
    this.message = page.locator("#username_show");
  }

  async goTo() {
    await this.page.goto("https://adactinhotelapp.com/");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}
