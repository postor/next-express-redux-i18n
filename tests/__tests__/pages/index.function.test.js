import { browserLangs, cookieLangs, devices, launch } from '../../utils'

describe('index-function', () => {
  const enBrowser = browserLangs.find((x) => x.lang = 'en')
  let lastBrowser
  it('change-language', async () => {
    const { browser, differencify } = await launch()
    lastBrowser = browser
    const page = await browser.newPage()

    await page.evaluateOnNewDocument(enBrowser.evaluate)
    await page.setExtraHTTPHeaders(enBrowser.headers)
    await page.goto(`http://${process.env.WEBHOST || 'localhost'}:3000?d=change-language`)

    const enTitle = await page.title()
    expect(enTitle).toBe('this is home page!')

    await page.click('select')
    await page.select('select', 'zh')
    await page.waitForFunction('document.title==`这里是首页！`', { timeout: 5000 })

    await page.close()
    await browser.close()
    await differencify.cleanup()
  }, 60000)
  afterEach(() => lastBrowser.close())
});