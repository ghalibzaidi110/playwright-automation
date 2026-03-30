import { test, expect } from "@playwright/test";
import testData from "../../Data/positive.json";
import { LoginPage } from "../../Pages/LoginPage";

const data = testData.validLogin;

test("TC02 - Successful Login with Valid Credentials", async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.message).toHaveValue(data.expectedWelcome);
});
