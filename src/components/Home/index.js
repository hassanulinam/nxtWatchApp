import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import routeConstants from '../routeConstants'
import apiStatusConstants from '../apiStatusConstants'
import './index.css'
import {
  WholeRouteContainer,
  SideBarAndContentsContainer,
  VideoItemsListContainer,
  BannerCardBgContainer,
  BannerCardTextSection,
  BannerBuyButton,
  BannerCloseBtn,
  BannerText,
  DflexCenter,
  LiBanner,
  LiSearchBarContainer,
  SearchBoxForm,
  Input,
  SearchButton,
  LiNoSearchResults,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'
import {WebsiteLogoImg} from '../Login/styledComponents'
import AppContext from '../../context/AppContext'
import {RetryBtn} from '../FailureView/styledComponents'

const currentRoute = routeConstants.home
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
    const {videosData, searchInput} = this.state
    const color = '#909090'

    return (
      <VideoItemsListContainer>
        <LiBanner>{this.renderBannerSectionView()}</LiBanner>
        <LiSearchBarContainer>
          <SearchBoxForm onSubmit={this.getVideosData} color={color}>
            <Input
              type="search"
              value={searchInput}
              onChange={e => this.setState({searchInput: e.target.value})}
              color={color}
            />
            <SearchButton
              type="submit"
              data-testid="searchButton"
              color={color}
            >
              <BsSearch color={color} size={20} />
            </SearchButton>
          </SearchBoxForm>
        </LiSearchBarContainer>
        {videosData.length === 0 ? (
          <LiNoSearchResults>
            <NoVideosImg
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NoVideosHeading>No Search results found</NoVideosHeading>
            <NoVideosText>
              Try different key words or remove search filter
            </NoVideosText>
            <RetryBtn onClick={this.getVideosData}>Retry</RetryBtn>
          </LiNoSearchResults>
        ) : (
          videosData.map(item => (
            <VideoItem key={item.id} videoDetails={item} />
          ))
        )}
      </VideoItemsListContainer>
    )
  }

  renderHomePageBasedOnAPIStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
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
            <WholeRouteContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <SideBarAndContentsContainer bgColor={bgColor}>
                <SideBar activeRoute={currentRoute} />
                {this.renderHomePageBasedOnAPIStatus()}
              </SideBarAndContentsContainer>
            </WholeRouteContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
