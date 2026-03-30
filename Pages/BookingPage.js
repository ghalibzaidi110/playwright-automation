export class BookingPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator("#first_name");
    this.lastName = page.locator("#last_name");
    this.address = page.locator("#address");
    this.ccNum = page.locator("#cc_num");
    this.ccType = page.locator("#cc_type");
    this.ccExpMonth = page.locator("#cc_exp_month");
    this.ccExpYear = page.locator("#cc_exp_year");
    this.ccCvv = page.locator("#cc_cvv");
    this.bookNowBtn = page.locator("#book_now");
  }

  async bookHotel(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.address.fill(data.address);
    await this.ccNum.fill(data.ccNumber);
    await this.ccType.selectOption(data.ccType);
    await this.ccExpMonth.selectOption(data.ccExpiryMonth);
    await this.ccExpYear.selectOption(data.ccExpiryYear);
    await this.ccCvv.fill(data.cvv);
    await this.bookNowBtn.click();
  }
}
