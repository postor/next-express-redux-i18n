import { translate } from './i18n'
import routes from '../../server/routes'
import ChangeLanguage from './ChangeLanguage'

const { Link } = routes

const Header = ({ t }) => (<header>
  <nav>
    <Link route="index">
      <a>{t('Home')}</a>
    </Link>
    |
    <Link route="about">
      <a>{t('About')}</a>
    </Link>
    |
    <ChangeLanguage />
  </nav>
</header>)

export default translate(['common'])(Header)