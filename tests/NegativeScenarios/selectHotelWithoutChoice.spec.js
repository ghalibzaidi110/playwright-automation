import { test, expect } from "@playwright/test";
import testData from "../../Data/negative.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";
import { SearchHotelPage } from "../../Pages/SearchHotelPage";

const data = testData.invalidHotelSelection;
const user = testData.validUser;

test("TC09 - Select Hotel Without Choosing a Hotel", async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(user.username, user.password);
  await expect(loginPage.message).toHaveValue(user.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(data);

  const searchHotelPage = new SearchHotelPage(page);
  await searchHotelPage.continueBtn.click();

  await expect(page.locator("#radiobutton_span")).toContainText(
    "Please Select a Hotel",
  );
});
