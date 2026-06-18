
// Ancestor --> grand father
// parent ---> parent
// preceding-sibling --> elder brother / sister
// child --> child (myself)
// following sibling -->younger brother / sister
// decentant --> grnad child




// import{test} from'@playwright/test'
// test('window handling', async({browser})=>{
//    const context = await browser.newContext()
//    const page = await context.newPage()
//    await page.goto('https://www.amazon.in/')
//    await page.locator('//input[@id="twotabsearchtextbox"]').fill('samsung s24 ultra')
//    await page.keyboard.press('Enter')
//    //await page.waitForTimeout(3000)

//    //h2[contains(@aria-label,"Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage)")]
   
//    const [newPage]=await Promise.all([context.waitForEvent('page'),
//    page.click('//h2[contains(@aria-label,"Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage)")]')
//    ])
//    await newPage.waitForLoadState()
//    const title =await newPage.title()
//    console.log(title)
// })



//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 Pro Max (Deep Blue, 256 GB)"]

import{test} from'@playwright/test'
test('window handling', async({browser})=>{
   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://www.flipkart.com/')
   await page.locator('(//input[@autocomplete="off"])[1]').fill('iphone 17 pro')
   await page.keyboard.press('Enter')
   //await page.waitForTimeout(3000)

   //h2[contains(@aria-label,"Galaxy S25 Ultra 5G AI Smartphone (Titanium Black, 12GB RAM, 512GB Storage)")]
   
   const [newPage]=await Promise.all([context.waitForEvent('page'),
   page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 Pro Max (Deep Blue, 256 GB)"]')
   ])
   await newPage.waitForLoadState()
   const title =await newPage.title()
   console.log(title)
})


// // meesho

// import{test} from '@playwright/test'
// test('meesho task',async({page})=>{  
//    await page.goto('https://www.caratlane.com/')
//    await page.locator('//input[@name="search"]').fill('gold ring')
//    await page.keyboard.press('Enter')
//    await page.click('//h1[@class="PageTitle__HeadLine1-sc-gijhdx-0 jDrUJn"]//ancestor::div[@class="sc-gnOvAp sc-glJfXD KMDTw eJycqd"]//following-sibling::div[@class="sc-gnOvAp sc-glJfXD KMDTw eJycqd"]//descendant::img[@src="https://images.meesho.com/images/products/450473229/rte0i_512.webp?width=360"]')
//    const title = await page.title()
//    console.log(title)

// })


