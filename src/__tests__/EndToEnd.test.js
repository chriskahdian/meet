import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    jest.setTimeout(60000);
    

    beforeAll(async () => {
        browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true, //false allows browser to be opened and testing to be viewed
            // slowMo: 250, //slow down by 250ms
            ignoreDefaultArgs: ['--disable-extensions'] //ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    // EXAMPLE 1
    // beforeAll(async () => {
    //   jest.setTimeout(30000);
    //   browser = await puppeteer.launch({
    //     ignoreDefaultArgs: ['--disable-extensions'],
    //     args: ['--no-sandbox', '--disable-setuid-sandbox']
    //   });
    //   page = await browser.newPage();
    //   await page.goto('http://localhost:3000/');
    //   await page.waitForSelector('.event');
    // });

    // MINE
    // beforeAll(async () => {
    //     jest.setTimeout(30000);
    //     const browser = await puppeteer.launch({
    //         args: ['--no-sandbox', '--disable-setuid-sandbox']
    //     });
    //     const page = await browser.newPage();
    //     await page.goto('http://localhost:3000/');
    //     await page.waitForSelector('.event');
    // });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
        browser.close();
      });
});