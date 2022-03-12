import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import AppContext from '../../context/AppContext'
import routeConstants from '../routeConstants'

import {
  SideBarContainer,
  LinksSection,
  LinkText,
  LinkContainer,
  ContactUsSection,
  SocialMediaSection,
  SocialMediaIcon,
  Heading,
  Parah,
  CustomLink,
} from './styledComponents'

const SideBar = ({activeRoute}) => {
  const iconColors = {}
  Object.values(routeConstants).forEach(r => {
    iconColors[r] = 'gray'
  })
  iconColors[activeRoute] = 'red'
  const linksActiveness = {}
  Object.values(routeConstants).forEach(r => {
    linksActiveness[r] = activeRoute === r
  })
  const {home, trending, gaming, savedVideos} = routeConstants

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SideBarContainer isDark={isDark}>
            <LinksSection>
              <LinkContainer isactive={linksActiveness[home]}>
                <CustomLink as={Link} to={routeConstants.home}>
                  <AiFillHome
                    color={iconColors[routeConstants.home]}
                    size="28"
                  />
                  <LinkText>Home</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer isactive={linksActiveness[trending]}>
                <CustomLink as={Link} to={routeConstants.trending}>
                  <HiFire
                    color={iconColors[routeConstants.trending]}
                    size="28"
                  />
                  <LinkText>Trending</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer isactive={linksActiveness[gaming]}>
                <CustomLink as={Link} to={routeConstants.gaming}>
                  <SiYoutubegaming
                    color={iconColors[routeConstants.gaming]}
                    size="28"
                  />
                  <LinkText>Gaming</LinkText>
                </CustomLink>
              </LinkContainer>
              <LinkContainer isactive={linksActiveness[savedVideos]}>
                <CustomLink as={Link} to={routeConstants.savedVideos}>
                  <CgPlayListAdd
                    color={iconColors[routeConstants.savedVideos]}
                    size="28"
                  />
                  <LinkText>Saved videos</LinkText>
                </CustomLink>
              </LinkContainer>
            </LinksSection>

            <ContactUsSection>
              <Heading>CONTACT US</Heading>
              <SocialMediaSection>
                <SocialMediaIcon
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
                <SocialMediaIcon
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <SocialMediaIcon
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </SocialMediaSection>
              <Parah>
                Enjoy! Now to see your channels and recommendations!
              </Parah>
            </ContactUsSection>
          </SideBarContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default SideBar
