import puppeteer from 'puppeteer';
import { mockData } from '../mock-data';

describe('show/hide an event details', () => {

    let browser, page;
    jest.setTimeout(30000);
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, // slow actions by 250ms
            ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.Event');
    });

       afterAll(() => {
        browser.close();
    });



    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.details-button');
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.details-button');
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeNull();
    });
});