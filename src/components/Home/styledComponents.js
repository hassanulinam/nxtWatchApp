import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

export const HomeSideBarAndContentsContainer = styled.div`
  display: flex;
`

export const VideoItemsListContainer = styled.div`
  position: relative;
  top: 65px;
  margin: 0 20px;
  z-index: -20;
  display: flex;
  flex-wrap: wrap;
`

export const BannerCardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const BannerCardTextSection = styled.div`
  color: #181818;
  font-weight: 500;
`

export const BannerText = styled.p`
  font-size: 18px;
  line-height: 48px;
  max-width: 400px;
`

export const BannerBuyButton = styled.button`
  border: 2px solid #181818;
  padding: 10px;
  font-weight: 600;
  color: #181818;
  font-size: 16px;
  background-color: transparent;
  margin-top: 20px;
`

export const BannerCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  outline: none;
  align-self: flex-start;
  cursor: pointer;
`
