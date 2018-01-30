import React from 'react'
import { connect } from 'react-redux'

import { wrapper as i18nWrapper } from './i18n'
import { wrapper as reduxWrapper } from '../redux'
import { set as setUser } from '../redux/user'

export default (Page) => reduxWrapper(i18nWrapper(connect()(class MyWrapper extends React.Component {
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
    const { req, store } = ctx
    try {
      const user = await req.getUser()
      if (req.user) {
        console.log('set user'+JSON.stringify(user))
        store.dispatch(setUser(user))
      }
    } catch (e) {
      console.log(e)
    }
    return pageInitialProps
  }

  static translateNS = Page.translateNS

})))