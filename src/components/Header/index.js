import {MdMenu} from 'react-icons/md'
import {FaMoon} from 'react-icons/fa'
import {HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from '../../context/AppContext'
import {
  HeaderResponsiveContainer,
  HeaderContentsWrapper,
  HeaderNavLinksContainer,
  ThemeButton,
  MenuButton,
  ProfilePic,
  LogoutSmBtn,
  LogoutMdBtn,
  WebsiteLogoImg,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, toggleDarkTheme} = value
        const websiteLogoImgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderResponsiveContainer isDark={isDark}>
            <HeaderContentsWrapper>
              <WebsiteLogoImg alt="website logo" src={websiteLogoImgUrl} />
              <HeaderNavLinksContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={() => toggleDarkTheme()}
                >
                  {isDark && <HiOutlineSun color="#ffffff" size={30} />}
                  {!isDark && <FaMoon color="#000000" size={25} />}
                </ThemeButton>
                <MenuButton type="button">
                  <MdMenu color={isDark ? '#ffffff' : '#000000'} size={30} />
                </MenuButton>
                <ProfilePic
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
                <LogoutSmBtn type="button" onClick={onLogout}>
                  <FiLogOut color={isDark ? '#ffffff' : '#000000'} size={30} />
                </LogoutSmBtn>
                <LogoutMdBtn type="button" onClick={onLogout}>
                  Logout
                </LogoutMdBtn>
              </HeaderNavLinksContainer>
            </HeaderContentsWrapper>
          </HeaderResponsiveContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
