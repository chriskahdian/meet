// import puppeteer from 'puppeteer';

// describe('show/hide an event details', () => {
//   let browser;
//   let page;
//   beforeAll(async () => {
//     jest.setTimeout(30000);
//     // browser = await puppeteer.launch();
//     browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.event');
//   });

//   afterAll(() => {
//     browser.close();
//   });
//   test('An event element is collapsed by default', async () => {
//     const eventDetails = await page.$('.event .detailInfo');
//     expect(eventDetails).toBeNull();
//   });

//   test('User can expand an event to see its details', async () => {
//     await page.click('.event .showDetails');
//     const eventDetails = await page.$('.event .detailInfo');
//     expect(eventDetails).toBeDefined();
//   });

//   test('User can collapse an event to hide its details', async () => {
//     await page.click('.event .showDetails');
//     const eventDetails = await page.$('.event .detailInfo');
//     expect(eventDetails).toBeNull();
//   });
// });

// describe('Filter events by city', () => {
//   const browser = puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
//   let page;
//   beforeAll(async () => {
//     jest.setTimeout(30000);
//     browser = await puppeteer.launch();
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//   });

//   afterAll(() => {
//     browser.close();
//   });

//   test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
//     const events = await page.$$('.event');
//     expect(events).toHaveLength(2);
//   });
// });


// import puppeteer from 'puppeteer';

// describe('show/hide an event details', () => {

//     // EXAMPLE 2
//     // let browser;
//     // let page;
//     // jest.setTimeout(60000);
//     // beforeAll(async () => {
//     //     browser = await puppeteer.launch({
//     //         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     //         headless: true, //false allows browser to be opened and testing to be viewed
//     //         // slowMo: 250, //slow down by 250ms
//     //         ignoreDefaultArgs: ['--disable-extensions'] //ignores default setting that causes timeout errors
//     //     });
//     //     page = await browser.newPage();
//     //     await page.goto('http://localhost:3000/');
//     //     await page.waitForSelector('.event');
//     // });

//     // EXAMPLE 1
//     // beforeAll(async () => {
//     //   jest.setTimeout(30000);
//     //   browser = await puppeteer.launch({
//     //     ignoreDefaultArgs: ['--disable-extensions'],
//     //     args: ['--no-sandbox', '--disable-setuid-sandbox']
//     //   });
//     //   page = await browser.newPage();
//     //   await page.goto('http://localhost:3000/');
//     //   await page.waitForSelector('.event');
//     // });

    // MINE
    jest.setTimeout(60000);
    beforeAll(async () => {
        // doesn't work here, must go above "beforeAll"
        // jest.setTimeout(30000);
    });
    test('An event element is collapsed by default', async () => {
        // const browser = await puppeteer.launch();
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
        browser.close();
    });
    test('User can expand an event to see its details', async () => {
        // const browser = await puppeteer.launch();
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeDefined();
        browser.close();
    });
});