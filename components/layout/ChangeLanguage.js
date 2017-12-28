import { helper } from './i18n'

const ChangeLanguage = (props) => {
  console.log(helper.getCurrentLanguage())
  return (<select value={helper.getCurrentLanguage()} onChange={(e) =>
    helper.setCurrentLanguage(e.target.value)
  }>
    <option value="en">English</option>
    <option value="zh">中文</option>
  </select>)
}

export default ChangeLanguage