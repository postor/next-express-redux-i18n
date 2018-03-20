import { Component } from 'react'
import { connect } from 'react-redux'
import { clear, login } from './redux/user'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    const { user, dispatch } = this.props
    if (!user) {
      return this.renderLogin()
    }

    const { username } = user
    return (<div>
      <p>hi, {username}|<a onClick={() => {
        dispatch(clear())
      }}>登出</a></p>
    </div>)

  }

  renderLogin() {
    const { username, password } = this.state

    return (<div>
      <p>
        <label>username:</label>
        <input value={username} onChange={(e) => this.setState({
          username: e.target.value,
        })} />
      </p>
      <p>
        <label>password:</label>
        <input value={password} onChange={(e) => this.setState({
          password: e.target.value,
        })} />
      </p>
      <p><button onClick={() => this.login()}>login</button></p>
      <p>test:123</p>
    </div>)
  }

  login() {
    const { username, password } = this.state
    if (!username) {
      alert('empty username')
      return
    }
    if (!password) {
      alert('empty password')
      return
    }
    const {dispatch} = this.props
    dispatch(login(username, password))
  }
}

export default connect(({ user }) => {
  return { user }
})(User)