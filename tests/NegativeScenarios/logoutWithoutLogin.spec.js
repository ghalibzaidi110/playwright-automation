import { test, expect } from "@playwright/test";

test("TC12 - Logout Attempt Without Logging In", async ({ page }) => {
  test.setTimeout(60000);

  await page.goto("https://adactinhotelapp.com/");

  const logoutLink = page.locator("#logout");
  await expect(logoutLink).toHaveCount(0);

  await expect(page.locator("#login")).toBeVisible();
  await expect(page.locator("#username")).toBeVisible();
});
