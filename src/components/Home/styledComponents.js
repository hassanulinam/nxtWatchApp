import styled from 'styled-components'

export const WholeRouteContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`

export const SideBarAndContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  overflow-y: hidden;
`

export const VideoItemsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  overflow-y: auto;
  width: 100%;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`

export const LiBanner = styled.li`
  width: 100%;
`

export const BannerCardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const BannerCardTextSection = styled.div`
  color: ${props => props.color};
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

export const LiSearchBarContainer = styled.li`
  width: 100%;
  margin: 20px 5px;
`

export const SearchBoxForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 0;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.color};
  border-radius: 8px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  color: ${props => props.color};
  padding: 0 12px;
`

export const SearchButton = styled.button`
  padding: 10px 25px;
  background-color: transparent;
  border: none;
  border-left: 1px solid ${props => props.color};
`

export const LiNoSearchResults = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const NoVideosImg = styled.img`
  width: 100%;
  max-width: 500px;
`

export const NoVideosHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
`

export const NoVideosText = styled.p`
  color: gray;
  font-size: 18px;
`
