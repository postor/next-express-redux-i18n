import { browserLangs, cookieLangs, devices, launch } from '../../utils'

describe('index-function', () => {
  const enBrowser = browserLangs.find((x)=>x.lang='en')

  it(d, async () => {
    await launch()
      .evaluateOnNewDocument(enBrowser.evaluate)
      .setExtraHTTPHeaders(enBrowser.headers)
      .goto(`http://localhost:3000?d=${d}`)
      .close()
      .end();
  }, 60000)
});