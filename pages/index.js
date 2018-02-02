import { translate } from '../components/layout/i18n'
import Layout from '../components/layout'
import User from '../components/User'
import AuthedApi from '../components/AuthedApi'
import ReduxTest from '../components/ReduxTest'

const Index = ({ t }) => (<article>
  <p>{t('this is home page!')}</p>
  <User />
  <hr />
  <AuthedApi />
  <ReduxTest />
</article>)

export default Layout(translate(['index'])(Index))