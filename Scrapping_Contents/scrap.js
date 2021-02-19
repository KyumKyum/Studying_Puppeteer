//================================================================
/*
Studying Puppeteer: Web Scrapping Library made by Google Chrome dev. 
*/
//================================================================
//Imports
const puppeteer = require('puppeteer');

//Code Starts Here

startScrap();

async function startScrap(){
    const browser = await puppeteer.launch(); //launch browser
    const page = await browser.newPage(); // Open the new page
    await page.goto('https://google.com'); //Move to google page.
    await page.type('input[class="gLFyf gsfi"]', 'Puppeteer'); //Type "Puppeteer" at the Google Search Box 
    //ID of google search box = gLFyf gsfi 
    await page.type('input[class="gLFyf gsfi"]',String.fromCharCode(13)); // Input 'Enter' key to start the search
    //Character Code 13 : Enter Key
    await page.waitForSelector('a h3'); //Wait until the content of 'h3' below th tag 'a' appearscd ../
    const links = await page.evaluate(() => { //Evaluate the data
        return Array.from(document.querySelectorAll('a h3')).map(h3 => (h3.textContent)); //Return all text contents of the tag h3
    })
    console.log(links.join('\n')); // Print the result to the console.
    browser.close(); //close the browser
}

