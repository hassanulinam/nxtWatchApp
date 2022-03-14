import {MdMenu} from 'react-icons/md'
import {FaMoon} from 'react-icons/fa'
import {HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState} from 'react'

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
  const [expandHambMenu, setHambMenuExpansion] = useState(false)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, toggleDarkTheme} = value
        const color = isDark ? '#ffffff' : '#000000'
        const bgColor = isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)'
        const websiteLogoImgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderResponsiveContainer bgColor={bgColor}>
            <HeaderContentsWrapper>
              <Link to="/">
                <WebsiteLogoImg alt="website logo" src={websiteLogoImgUrl} />
              </Link>
              <HeaderNavLinksContainer>
                <ThemeButton
                  data-testid="theme"
                  type="button"
                  onClick={() => toggleDarkTheme()}
                >
                  {isDark && <HiOutlineSun color="#ffffff" size={30} />}
                  {!isDark && <FaMoon color="#000000" size={25} />}
                </ThemeButton>
                <MenuButton
                  type="button"
                  onClick={() => setHambMenuExpansion(p => !p.expandHambMenu)}
                >
                  <MdMenu color={color} size={30} />
                </MenuButton>
                <ProfilePic
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
                <LogoutSmBtn type="button" onClick={onLogout}>
                  <FiLogOut size={30} color={color} />
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
