import { test, expect } from "@playwright/test";
import testData from "../../Data/negative.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";

const data = testData.validUser;

test("TC08 - Search Hotel Without Selecting Mandatory Fields", async ({
  page,
}) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.message).toHaveValue(data.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchBtn.click();

  await expect(page.locator("#location_span")).toContainText(
    "Please Select a Location",
  );
});
