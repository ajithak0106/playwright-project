import { test } from "@playwright/test";
import { waitForDebugger } from "node:inspector";
test('calsoft new ab detail page',async({browser})=>{
   const context =await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://dev.flowzo.ai/sign-in?redirectURL=%2Fdashboard')
   await page.locator('//input[@placeholder="Enter your email or username"]').fill('caaal@gmail.com')
   await page.locator('//input[@placeholder="Enter your password"]').fill('Welcome@123')
   await page.locator('//span[text()="Sign in to Dashboard →"]').click()
   await page.locator('((//div[text()="Lead"])[1])').click()
   //await page.locator('(//mat-icon[text()="open_in_new"])[1]').click()
   const [newPage] = await Promise.all([(context.waitForEvent('page')),
    page.click('(//mat-icon[text()="open_in_new"])[1]')])
    await newPage.waitForEvent()
    const final = await newPage.locator('//span[text()="Followup"]').click()
    console.log(final) 
})