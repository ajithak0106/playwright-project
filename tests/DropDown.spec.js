// import {test} from "@playwright/test";
// test('DropDown Handling',async({page})=> {
//     await page.goto('https://letcode.in/dropdowns/')
//    const DropDown = await page.locator('//select[@id="fruits"]')
//    await DropDown.selectOption({index:3})
//    const single = await DropDown.locator('option:checked').textContent()
//    console.log(single)
//    await page.waitForTimeout(3000)


// // multiple dropdown

// const multidropdown = await page.locator('//select[@id="superheros"]')
// await multidropdown.selectOption([{index:2},{value:"ca"},{label:"Iron Man"}])
// const text = await multidropdown.locator('option:checked').allTextContents()
// console.log(text)
// })

// // task of dropdown 

// import { test } from "@playwright/test";
// test('task of dropdown',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//input[@id="name"]').fill('Ajith kumar')
//     await page.locator('//input[@id="email"]').fill('ajith@gmail.com')
//     await page.locator('//input[@id="phone"]').fill('7894561230')
//     await page.locator('//textarea[@id="textarea"]').fill('tambaram')
//     await page.locator('//input[@id="male"]').click()
//     await page.locator('//input[@id="sunday"]').check()
//     await page.locator('//input[@id="wednesday"]').check()
//     await page.locator('//input[@id="saturday"]').check()
//    const dropdown = await page.locator('//select[@id="country"]')
//    await dropdown.selectOption({value:"india"})
//    const single=await dropdown.locator('option:checked').textContent()
//    console.log(single)
//    const multidropdown = await page.locator('//select[@id="colors"]')
//    await multidropdown.selectOption([{value:"blue"},{value:"red"},{value:"green"}])
//     const multi = await multidropdown.locator('option:checked').allTextContents()
//     console.log(multi)
//     await page.waitForTimeout(3000)

// })

import {test} from '@playwright/test'
test('dropdown Handling',async ({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    const singledropdown = await page.locator('//select[@id="fruits"]')
    await singledropdown.selectOption({label:"Banana"})
    const dropdown = await singledropdown.locator('option:checked').textContent()
    console.log(dropdown)
    const multi = await page.locator('//select[@id="superheros"]')
    await multi.selectOption([{index:1},{value:"ta"},{label:"Captain America"}])
    const multidropdown = await multi.locator('option:checked').allTextContents()
    console.log(multidropdown)
})






   