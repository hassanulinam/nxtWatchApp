import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginResponsiveContainer,
  LoginForm,
  WebsiteLogoImg,
  Label,
  Input,
  SubmitBtn,
  ErrMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    errMsg: '',
    showPassword: false,
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  saveTokenAndGoToHome = token => {
    Cookies.set('jwt_token', token, {expires: 5})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const URL = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(URL, options)
    const data = await response.json()
    if (response.ok) this.saveTokenAndGoToHome(data.jwt_token)
    else this.setState({errMsg: data.error_msg})
  }

  renderLoginForm = () => {
    const {usernameInput, passwordInput, errMsg, showPassword} = this.state
    const passwordInputType = showPassword ? 'text' : 'password'

    return (
      <LoginForm onSubmit={this.onSubmitForm}>
        <WebsiteLogoImg
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <Label htmlFor="nameInput">USERNAME</Label>
        <Input
          type="text"
          id="nameInput"
          value={usernameInput}
          onChange={this.onChangeUsernameInput}
        />
        <Label htmlFor="passwordInput">PASSWORD</Label>
        <Input
          type={passwordInputType}
          id="passwordInput"
          value={passwordInput}
          onChange={this.onChangePasswordInput}
        />
        <input
          type="checkbox"
          onChange={this.onChangeShowPassword}
          id="showPassword"
        />
        <Label htmlFor="showPassword">Show Password</Label>
        <SubmitBtn type="submit">Login</SubmitBtn>
        <ErrMsg>{errMsg}</ErrMsg>
      </LoginForm>
    )
  }

  render() {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) return <Redirect to="/" />
    return (
      <LoginResponsiveContainer>
        {this.renderLoginForm()}
      </LoginResponsiveContainer>
    )
  }
}

export default Login
