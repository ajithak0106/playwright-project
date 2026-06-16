import {test} from '@playwright/test'
test('facebook page',async ({page})=>{
    await page.goto("https://dev.flowzo.ai/sign-in?redirectURL=%2Fdashboard")
    await page.locator('//input[@data-placeholder="Enter your email or username"]').fill('caaal@gmail.com')
    await page.locator('//input[@autocomplete="current-password"]').fill('Welcome@123')
    await page.locator('//span[text()="Sign in to Dashboard →"]').click()
    await page.waitForTimeout(3000)

    console.log("hello world")
    
})

//  url: https://practicetestautomation.com/practice-test-login/


// // tak login instagram

// import{test} from '@playwright/test'
// test('login instagram',async({page})=>{
// await page.goto('https://www.instagram.com/')
// await page.locator('//input[@autocomplete="username webauthn"]').fill('7092651720')
// await page.locator('//input[@name="pass"]').fill('Jaya@123')
// await page.locator('//span[text()="Log in"]').click()
// await page.waitForTimeout(3000)
// })
