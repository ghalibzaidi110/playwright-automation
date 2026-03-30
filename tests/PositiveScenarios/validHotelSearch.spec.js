import { test, expect } from "@playwright/test";
import testData from "../../Data/positive.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";

const loginData = testData.validLogin;
const searchData = testData.hotelSearch;

test("TC03 - Valid Hotel Search with Correct Filters", async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(loginData.username, loginData.password);
  await expect(loginPage.message).toHaveValue(loginData.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(searchData);

  await expect(page.locator("#radiobutton_0").first()).toBeVisible();
});
