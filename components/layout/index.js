import React from 'react'
import Head from 'next/head'
import wrapper from './wrapper'
import Header from './Header'
import Footer from './Footer'

const layout = (Page) => wrapper(class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { url } = this.props
    return (<div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header url={url} />
      <Page {...this.props} />
      <Footer />
    </div>)
  }
  static translateNS = [...Header.translateNS || [], ...Page.translateNS || []]
  static getInitialProps = async (ctx) => {
    return await Promise.all([
      Header.getInitialProps ? Header.getInitialProps(ctx) : Promise.resolve(true),
      Page.getInitialProps ? Page.getInitialProps(ctx) : Promise.resolve(true),
    ])
  }
})


export default layout