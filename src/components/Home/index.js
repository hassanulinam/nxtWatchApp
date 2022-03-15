import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

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
  DflexCenter,
  LiBanner,
} from './styledComponents'
import {WebsiteLogoImg} from '../Login/styledComponents'
import AppContext from '../../context/AppContext'

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

  closeBanner = async () => {
    await this.setState({showBanner: false})
    console.log('Closing banner triggered....')
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderBannerSectionView = () => {
    const {showBanner} = this.state

    if (showBanner)
      return (
        <BannerCardBgContainer
          data-testid="banner"
          className="animate__animated animate__fadeInDown animate__fast"
        >
          <BannerCardTextSection>
            <WebsiteLogoImg alt="nxt watch logo" src={websiteLogoImgUrl} />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerBuyButton type="button">GET IT NOW</BannerBuyButton>
          </BannerCardTextSection>
          <BannerCloseBtn
            type="button"
            data-testid="close"
            onClick={this.closeBanner}
          >
            <IoMdClose size={20} color="#181818" />
          </BannerCloseBtn>
        </BannerCardBgContainer>
      )
    return null
  }

  renderVideosListView = () => {
    const {videosData} = this.state

    return (
      <VideoItemsListContainer>
        <LiBanner>{this.renderBannerSectionView()}</LiBanner>
        {videosData.map(item => (
          <VideoItem key={item.id} videoDetails={item} />
        ))}
      </VideoItemsListContainer>
    )
  }

  renderHomePageBasedOnAPIStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return (
          <DflexCenter margin="60px 0">
            <FailureView retryMethod={this.getVideosData} />
          </DflexCenter>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? '#181818' : '#f9f9f9'

          return (
            <HomeRouteContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeSideBarAndContentsContainer bgColor={bgColor}>
                <SideBar activeRoute={routeConstants.home} />
                {this.renderHomePageBasedOnAPIStatus()}
              </HomeSideBarAndContentsContainer>
            </HomeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
