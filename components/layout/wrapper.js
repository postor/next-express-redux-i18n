import React from 'react'
import { connect } from 'react-redux'

import { wrapper as i18nWrapper } from './i18n'
import { wrapper as reduxWrapper } from '../redux'
import { set } from '../redux/user'
import { parserMethodName } from '../../jwt-config'

const wrapper = (Page) => reduxWrapper(i18nWrapper(connect()(class MyWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Page {...this.props} />
  }

  static async getInitialProps(ctx) {
    let pageInitialProps = {}
    Page.getInitialProps && (pageInitialProps = await Page.getInitialProps(ctx))

    //user
    const { store, req } = ctx
    if (store && req) {
      const user = await req[parserMethodName]()
      store.dispatch(set(user))
    }

    return pageInitialProps
  }

  static translateNS = Page.translateNS

})))

export default wrapper