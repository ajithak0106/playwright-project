export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.Password = page.locator('//input[@id="password"]')
        this.button = page.locator('//input[@id="login"]')

    }
    async VisitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async EnterUsername(uname){
        await this.username.fill(uname)
        
    }
    async EnterPassword(upass){
        await this.Password.fill(upass)
    }
    async ClickButton(){
        await this.button.click()
    }


}


