import React from 'react'
import { connect } from 'react-redux'

import { helper, wrapper as i18nWrapper } from './i18n'
import { wrapper as reduxWrapper } from '../redux'

export default (Page) => reduxWrapper(i18nWrapper(connect()(class MyWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Page {...this.props} />
  }

  static async getInitialProps(ctx) {
    var pageInitialProps = {}
    Page.getInitialProps && (pageInitialProps = await Page.getInitialProps(ctx))
    return pageInitialProps
  }

  static translateNS = Page.translateNS

})))