import {Component} from 'react'
import Cookies from 'js-cookie'

class Home extends Component {
  state = {sampleVar: true}

  render() {
    const {sampleVar} = this.state

    return <h1>Home Component in Progress........ {sampleVar}</h1>
  }
}

export default Home
