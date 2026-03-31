import { test, expect } from "@playwright/test";
import testData from "../../Data/positive.json";
import { LoginPage } from "../../Pages/LoginPage";
import { SearchPage } from "../../Pages/SearchPage";
import { SearchHotelPage } from "../../Pages/SearchHotelPage";
import { BookingPage } from "../../Pages/BookingPage";
import { ConfirmationPage } from "../../Pages/ConfirmationPage";
import { ItineraryPage } from "../../Pages/ItineraryPage";

const loginData = testData.validLogin;
const searchData = testData.hotelSearch;
const bookingData = testData.booking;

test("TC06 - Successful Logout After Booking", async ({ page }) => {
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
  await bookingPage.bookHotel(bookingData);

  const confirmationPage = new ConfirmationPage(page);
  const orderNumber = await confirmationPage.getOrderNumber();
  expect(orderNumber).toBeTruthy();

  // await confirmationPage.clickItinerary();
  // const itineraryPage = new ItineraryPage(page);
  // await itineraryPage.searchBooking(orderNumber);

  await itineraryPage.logout();
  await expect(page.locator("body")).toContainText(
    "You have successfully logged out.",
  );
});
