import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import wrapper from './wrapper'

const layout = (Page) => wrapper(class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { url } = this.props
    return (<div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Minfont Generator</title>
        <meta name="description" content="generate minified font for your site" />
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