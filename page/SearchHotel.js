export class SearchHotel{
    constructor(page){
        this.page = page
        this.HotelLocation = page.locator('//select[@id="location"]')
        this.Hotel = page.locator('//select[@id="hotels"]')
        this.RoomType = page.locator('//select[@id="room_type"]')
        this.NoOfRooms = page.locator('//select[@id="room_nos"]')
        this.Adults = page.locator('//select[@id="adult_room"]')
        this.children = page.locator('//select[@id="child_room"]')
        this.button = page.locator('//input[@id="Submit"]')

    }
    async VisitUrl(){
        await this.page.goto('https://adactinhotelapp.com/SearchHotel.php')

    }
    async SelectLocation(){
        await this.HotelLocation.selectOption({value:"Sydney"})
    }
    async SelectHotel(){
        await this.Hotel.selectOption({value:"Hotel Sunshine"})
    }
    async SelectRoomType(){
        await this.RoomType.selectOption({value:"Super Deluxe"})
    }
    async NumberOfRooms(){
        await this.NoOfRooms.selectOption({value:"4"})
    }
    async AdultsCount(){
        await this.Adults.selectOption({value:"3"})
    }
    async ChildrensCount(){
        await this.children.selectOption({value:"1"})
    }
    async ClickSearchButton(){
        await this.button.click()

    }
}