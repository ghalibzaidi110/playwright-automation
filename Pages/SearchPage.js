export class SearchPage {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotel = page.locator("#hotels");
    this.roomType = page.locator("#room_type");
    this.rooms = page.locator("#room_nos");
    this.checkIn = page.locator("#datepick_in");
    this.checkOut = page.locator("#datepick_out");
    this.adults = page.locator("#adult_room");
    this.children = page.locator("#child_room");
    this.searchBtn = page.locator("#Submit");
  }

  async searchHotel(data) {
    await this.location.selectOption(data.location);
    await this.hotel.selectOption(data.hotel);
    await this.roomType.selectOption(data.roomType);
    await this.rooms.selectOption(data.numberOfRooms);
    await this.checkIn.fill(data.checkInDate);
    await this.checkOut.fill(data.checkOutDate);
    await this.adults.selectOption(data.adultsPerRoom);
    await this.children.selectOption(data.childrenPerRoom);
    await this.searchBtn.click();
  }
}
