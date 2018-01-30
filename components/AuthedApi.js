import { Component } from 'react'
import request from 'superagent'

class AuthedApi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      result: undefined,
      error: undefined,
    }
  }

  render() {
    const { loading, result, error } = this.state
    return (<div>
      <p>loading:{loading}</p>
      <p>result:{JSON.stringify(result)}</p>
      <p>error:{JSON.stringify(error)}</p>
      <button onClick={() => this.loadAuthedApi()}>authed api</button>
    </div>)
  }

  loadAuthedApi() {
    this.setState({
      loading: true,
      result: undefined,
      error: undefined,
    })
    request.get('/apis/authed/test').then((res) => {
      this.setState({
        loading: false,
        result: res.body,
        error: undefined,
      })
    }).catch((error) => {
      this.setState({
        loading: false,
        result: undefined,
        error,
      })
    })
  }
}


export default AuthedApi