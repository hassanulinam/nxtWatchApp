import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const HomeSideBarAndContentsContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
`

export const VideoItemsListContainer = styled.ul`
  position: absolute;
  top: 65px;
  left: 250px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    justify-content: center;
    left: 0;
  }
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

export const DflexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin};
`
