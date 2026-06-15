import{test} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotel } from '../page/SearchHotel'
test('pom',async({page})=>{
    const login = new LoginPage(page)
    await login.VisitUrl()
    await login.EnterUsername('ajithak123')
    await login.EnterPassword('Welcome@123')
    await login.ClickButton()
    const searchHotel = new SearchHotel(page)
    await searchHotel.VisitUrl()
    await searchHotel.SelectLocation()
    await searchHotel.SelectHotel()
    await searchHotel.SelectRoomType()
    await searchHotel.NumberOfRooms()
    await searchHotel.AdultsCount()
    await searchHotel.ChildrensCount()
    await searchHotel.ClickSearchButton()
    await page.waitForTimeout(3000)
   })