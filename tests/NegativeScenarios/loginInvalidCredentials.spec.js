import { test, expect } from "@playwright/test";
import testData from "../../Data/negative.json";
import { LoginPage } from "../../Pages/LoginPage";

const data = testData.invalidLogin;

test("TC07 - Login with Invalid Credentials", async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(data.username, data.password);
  await expect(page.locator("body")).toContainText(data.expectedError);
});
