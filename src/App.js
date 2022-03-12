import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Counter from './components/Counter'

import AppContext from './context/AppContext'
import './App.css'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  toggleDarkTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addSavedVideo = videoItem => {
    this.setState(prev => ({savedVideos: [...prev.savedVideos, videoItem]}))
  }

  removeSavedVideo = videoItem => {
    const {savedVideos} = this.state
    const filteredVideos = savedVideos.filter(item => item.id !== videoItem.id)
    this.setState({savedVideos: filteredVideos})
  }

  render() {
    const {isDark, savedVideos} = this.state

    return (
      <AppContext.Provider
        value={{
          isDark,
          toggleDarkTheme: this.toggleDarkTheme,
          savedVideos,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/count" component={Counter} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
