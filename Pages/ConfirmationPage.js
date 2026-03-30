export class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.orderNo = page.locator("#order_no");
    this.itineraryBtn = page.locator("#my_itinerary");
  }

  async getOrderNumber() {
    await this.orderNo.waitFor({ state: "visible" });
    return await this.orderNo.inputValue();
  }

  async clickItinerary() {
    await this.itineraryBtn.click();
  }
}
