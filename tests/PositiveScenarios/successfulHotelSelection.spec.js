import { test, expect } from "@playwright/test";
import testData from "../../Data/positive.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";
import { SearchHotelPage } from "../../Pages/SearchHotelPage";
import { BookingPage } from "../../Pages/BookingPage";

const loginData = testData.validLogin;
const searchData = testData.hotelSearch;
const bookingData = testData.booking;

test("TC04 - Successful Hotel Selection and Booking", async ({ page }) => {
  test.setTimeout(120000);

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(loginData.username, loginData.password);
  await expect(loginPage.message).toHaveValue(loginData.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(searchData);

  const searchHotelPage = new SearchHotelPage(page);
  await searchHotelPage.selectAndContinue();

  const bookingPage = new BookingPage(page);
  await expect(bookingPage.bookNowBtn).toBeVisible();
  await expect(bookingPage.bookNowBtn).toBeEnabled();

  await bookingPage.bookHotel(bookingData);
});
