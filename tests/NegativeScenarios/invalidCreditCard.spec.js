import { test, expect } from "@playwright/test";
import testData from "../../Data/negative.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";
import { SearchHotelPage } from "../../Pages/SearchHotelPage";
import { BookingPage } from "../../Pages/BookingPage";

const data = testData.invalidCC;
const user = testData.validUser;

test("TC11 - Invalid Credit Card Details During Payment", async ({ page }) => {
  test.setTimeout(120000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(user.username, user.password);
  await expect(loginPage.message).toHaveValue(user.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(data);

  const searchHotelPage = new SearchHotelPage(page);
  await searchHotelPage.selectAndContinue();

  const bookingPage = new BookingPage(page);
  await bookingPage.bookHotel(data);

  await expect(page.locator("#cc_num_span")).toContainText(
    "Please Enter your 16 Digit Credit Card Number",
  );
});
