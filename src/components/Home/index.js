import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import routeConstants from '../routeConstants'
import './index.css'
import {
  HomeRouteContainer,
  HomeSideBarAndContentsContainer,
  VideoItemsListContainer,
  BannerCardBgContainer,
  BannerCardTextSection,
  BannerBuyButton,
  BannerCloseBtn,
  BannerText,
} from './styledComponents'
import {WebsiteLogoImg} from '../Login/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const websiteLogoImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
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

  closeBanner = () => {
    this.setState(prev => ({showBanner: !prev.showBanner}))
    console.log('Closing banner triggered....')
  }

  renderBannerSectionView = () => {
    const {showBanner} = this.state
    if (showBanner)
      return (
        <BannerCardBgContainer>
          <BannerCardTextSection>
            <WebsiteLogoImg alt="website logo" src={websiteLogoImgUrl} />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerBuyButton type="button">GET IT NOW</BannerBuyButton>
          </BannerCardTextSection>
          <BannerCloseBtn type="button">
            <IoMdClose size={20} color="#181818" onClick={this.closeBanner} />
          </BannerCloseBtn>
        </BannerCardBgContainer>
      )
    return null
  }

  renderVideosListView = () => {
    const {videosData} = this.state
    return (
      <VideoItemsListContainer>
        {this.renderBannerSectionView()}
        {videosData.map(item => (
          <VideoItem key={item.id} VideoDetails={item} />
        ))}
      </VideoItemsListContainer>
    )
  }

  render() {
    return (
      <HomeRouteContainer>
        <Header />
        <HomeSideBarAndContentsContainer>
          <SideBar activeRoute={routeConstants.home} />
          {this.renderVideosListView()}
        </HomeSideBarAndContentsContainer>
      </HomeRouteContainer>
    )
  }
}

export default Home
