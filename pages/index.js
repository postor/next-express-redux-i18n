import Head from 'next/head'
import { translate } from '../components/layout/i18n'
import Layout from '../components/layout'
import User from '../components/User'
import AuthedApi from '../components/AuthedApi'
import ReduxTest from '../components/ReduxTest'
import { helper } from '../components/layout/i18n'

const Index = ({ t }) => (<article>
  <Head>
    <title>{t('this is home page!')}</title>
  </Head>
  <p>{t('this is home page!')}</p>
  <p>{helper.currentLang}</p>
  <User />
  <hr />
  <AuthedApi />
  <ReduxTest />
</article>)

export default Layout(translate(['index'])(Index))