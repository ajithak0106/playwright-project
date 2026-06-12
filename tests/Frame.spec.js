// frame handling

import{test} from'@playwright/test'
test('frmae handling',async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const single = await page.frameLocator('//iframe[@id="singleframe"]')
    await single.locator('//input[@type="text"]').fill('hi ajith')
// multiple
    await page.locator('(//a[@class="analystic"])[2]').click()
    const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerframe = await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerframe.locator('//input[@type="text"]').fill('hello Everyone')
})

