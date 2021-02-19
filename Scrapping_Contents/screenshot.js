//================================================================
/*
Studying Puppeteer: Web Scrapping Library made by Google Chrome dev. 
*/
//================================================================
//Imports
const puppeteer = require('puppeteer');

//Code Starts Here

startScreenshot();

async function startScreenshot(){
    const browser = await puppeteer.launch();//launch browser
    const page = await browser.newPage();//Open the page

    await page.goto("https://naver.com");//go to the naver page
    //Search Weather at Naver.
    await page.type('input[class="input_text"]',"날씨");
    await page.click('button[class="btn_submit"');

    await page.waitForSelector('div[class="api_subject_bx"]'); //Wait until the result shows.

    //take a screenshot
    await page.screenshot({path: '../screenshot.png'});

    await browser.close();
}