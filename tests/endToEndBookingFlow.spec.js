import { test, expect } from "@playwright/test";
import testData from "../Data/e2e.json";
import { LoginPage } from "../Pages/LoginPage";
import { SearchPage } from "../Pages/SearchPage";
import { SearchHotelPage } from "../Pages/SearchHotelPage";
import { BookingPage } from "../Pages/BookingPage";
import { ConfirmationPage } from "../Pages/ConfirmationPage";
import { ItineraryPage } from "../Pages/ItineraryPage";

const data = testData.e2e;

test("TC01 - End to End workflow", async ({ page }) => {
  test.setTimeout(120000);
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(data.username, data.password);
  await expect(loginPage.message).toHaveValue(data.expectedWelcome);

  const searchPage = new SearchPage(page);
  await searchPage.searchHotel(data);

  const searchHotelPage = new SearchHotelPage(page);
  await searchHotelPage.selectAndContinue();

  const bookingPage = new BookingPage(page);
  await bookingPage.bookHotel(data);

  const confirmationPage = new ConfirmationPage(page);
  const orderNumber = await confirmationPage.getOrderNumber();

  await confirmationPage.clickItinerary();

  const itineraryPage = new ItineraryPage(page);
  await itineraryPage.searchBooking(orderNumber);
  await expect(
    itineraryPage.page.locator(`td:has-text("${orderNumber}")`).first(),
  ).toBeVisible({ timeout: 15000 });
  await itineraryPage.logout();
  await expect(page.locator("body")).toContainText(
    "You have successfully logged out.",
  );
});
