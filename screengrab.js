const puppeteer = require("puppeteer");

async function screenshotDOMElement(page, selector, padding = 0, fileName="test.png") {
  const rect = await page.evaluate(selector => {
    const element = document.querySelector(selector);
    const { x, y, width, height } = element.getBoundingClientRect();
    return { left: x, top: y, width, height, id: element.id };
  }, selector);
  console.log('width', rect.width);

  return await page.screenshot({
    path: fileName,
    clip: {
      x: rect.left - padding,
      y: rect.top - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    }
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/sscr");
  await screenshotDOMElement(page, '.sscr-target', 4, 'test.png');

  await browser.close();
})();
