import { browserLangs, cookieLangs, devices, launch } from '../../utils'

describe('index-differencify', () => {
  devices.forEach((device) => {
    browserLangs.forEach((browserLang) => {
      cookieLangs.forEach((cookieLang) => {
        const d = `${device.name}-browser-${browserLang.lang}-cookie-${cookieLang.lang}`
        it(d, async () => {
          await launch()
            .emulate(device.emulate)
            .setCookie(...cookieLang.cookies)
            .evaluateOnNewDocument(browserLang.evaluate)
            .setExtraHTTPHeaders(browserLang.headers)
            .goto(`http://localhost:3000?d=${d}`)
            .screenshot()
            .toMatchSnapshot()
            .close()
            .end();
        }, 60000)
      })
    })
  })
});