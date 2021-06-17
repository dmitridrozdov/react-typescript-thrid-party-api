const { firefox } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({ headless: false, slowMo: 100 });
//   const page = await browser.newPage();
//   await page.goto('http://whatsmyuseragent.org/');
// //   await page.screenshot({ path: `example.png` });
//   await browser.close();
// })();

(async () => {
    const browser = await firefox.launch({ headless: false, slowMo: 100 })
    // const context = await browser.newContext({ viewport: null })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/weather')
    await page.fill('.search-bar', 'Lviv')
    await page.keyboard.press('Enter')
    // await browser.close();
  })();