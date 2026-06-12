import { test } from "@playwright/test";
test('Alret',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    //simple
    await page.once('dialog',async (dialog)=>{
        await dialog.accept()
        console.log('simple:',dialog.message())
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
    
    // confirmation 
    await page.once('dialog', async (dialog)=>{
        await dialog.dismiss()
        console.log('confirmation',dialog.message())        
        })
        await page.locator('(//a[@class="analystic"])[2]').click()
    await page.locator('//button[@class="btn btn-primary"]').click()

    // prompt
    await page.once('dialog',async(dialog)=>{
        await dialog.accept('hii deepak')
        console.log('prompt:',dialog.message())
    })
    await page.locator('(//a[@class="analystic"])[3]').click()
    await page.locator('//button[@class="btn btn-info"]').click()
    await page.waitForTimeout(3000)
})

// task 
import{test} from'@playwright/test'
test('Alert task',async({page})=>{
    await page.goto('https://demoqa.com/alerts')
    await page.once('dialog',async(dialog)=>{
        await dialog.accept()
        console.log(await dialog.message())
    })    
    await page.locator('//button[@id="alertButton"]').click()

    await page.once('dialog', async(dialog)=>{
        await dialog.accept()
       console.log(await dialog.message())
    })
    await page.locator('//button[@id="timerAlertButton"]').click()

    await page.once('dialog',async(dialog)=>{
        await dialog.dismiss()
        console.log(await dialog.message())
    })
    await page.locator('//button[@id="confirmButton"]').click()

    await page.once('dialog', async(dialog)=>{
        await dialog.accept('ajith')
        console.log(await dialog.message())
    })
    await page.locator('//button[@id="promtButton"]').click()
    await page.waitForTimeout(6000)

})


