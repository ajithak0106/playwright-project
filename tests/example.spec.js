// @ts-check
import {test} from '@playwright/test';

test('flowzo page', async ({ page }) => {
  await page.goto("https://www.dev.amazons.ai/");
  });



  // Form Filling Task

  // import { test } from "@playwright/test";
  // test('Form Filling',async({page})=>{
  //   await page.goto('https://demoqa.com/text-box')
  //   await page.locator('//input[@id="userName"]').fill('Ajith Kumar')
  //   await page.locator('//input[@id="userEmail"]').fill('ajithkumar@gmail.com')
  //   await page.locator('//textarea[@id="currentAddress"]').fill('No 14, kannan street , selaiyur, chennai-600073' )
  //   await page.locator('//textarea[@id="permanentAddress"]').fill('No 14, kannan street , selaiyur, chennai-600073')
  //   await page.locator('//button[@id="submit"]').click()
  //   await page.waitForTimeout(5000)
  // })

  