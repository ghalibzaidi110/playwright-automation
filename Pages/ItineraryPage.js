export class ItineraryPage {
  constructor(page) {
    this.page = page;
    this.orderIdInput = page.locator("#order_id_text");
    this.searchBtn = page.locator("#search_hotel_id");
    this.logoutBtn = page.locator("#logout");
  }

  async searchBooking(orderNumber) {
    await this.orderIdInput.waitFor({ state: "visible" });
    await this.orderIdInput.fill(orderNumber);
    await this.searchBtn.click();
  }

  async logout() {
    await this.logoutBtn.click();
  }
}
