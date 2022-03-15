import styled from 'styled-components'

export const HeaderResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.bgColor};
  backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  z-index: 99;
`

export const HeaderContentsWrapper = styled.div`
  padding: 12px 16px;
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderNavLinksContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 180px;
  max-width: 250px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfilePic = styled.img`
  height: 32px;
`

export const LogoutSmBtn = styled.button`
  display: inline;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutMdBtn = styled.button`
  display: none;
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 12px;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`

export const WebsiteLogoImg = styled.img`
  height: 32px;
`
