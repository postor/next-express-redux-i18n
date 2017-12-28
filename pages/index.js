import { translate } from '../components/layout/i18n'
import Layout from '../components/layout'
import ReduxTest from '../components/redux-test'

const Index = ({t}) => (<article>
  <p>{t('this is home page!')}</p>
  <ReduxTest />  
</article>)

export default Layout(translate(['index'])(Index))