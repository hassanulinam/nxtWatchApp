import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import routeConstants from '../routeConstants'
import './index.css'
import {
  HomeRouteContainer,
  HomeSideBarAndContentsContainer,
  HomePageContentsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const accessToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
    const URL = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(URL, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        videosData: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderHomePageContents = () => {
    const {videosData} = this.state
    return (
      <HomePageContentsContainer>
        {videosData.map(item => (
          <VideoItem key={item.id} VideoDetails={item} />
        ))}
      </HomePageContentsContainer>
    )
  }

  render() {
    return (
      <HomeRouteContainer>
        <Header />
        <HomeSideBarAndContentsContainer>
          <SideBar activeRoute={routeConstants.home} />
          {this.renderHomePageContents()}
        </HomeSideBarAndContentsContainer>
      </HomeRouteContainer>
    )
  }
}

export default Home
