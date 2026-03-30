export class SearchHotelPage {
  constructor(page) {
    this.page = page;
    this.radioBtn = page.locator("#radiobutton_0").first();
    this.continueBtn = page.locator("#continue");
  }

  async selectAndContinue() {
    await this.radioBtn.check();
    await this.continueBtn.click();
  }
}
