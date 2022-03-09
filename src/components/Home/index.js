import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {sampleVar: true}

  render() {
    const {sampleVar} = this.state

    return (
      <div>
        <Header />
        <h1>Home Component in Progress........ {sampleVar}</h1>
      </div>
    )
  }
}

export default Home
