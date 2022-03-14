import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: sticky;
  top: 65px;
  height: 85vh;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  color: ${props => (!props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 250px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LinksSection = styled.div`
  padding: 0;
  list-style-type: none;
`

export const CustomLink = styled.div`
  color: #181818;
  text-decoration: none;
  padding: 10px;
  display: flex;
  align-items: center;
`

export const LinkContainer = styled.li`
  width: 100%;
  background-color: ${props => (props.isactive ? '#10101010' : 'transparent')};
  font-weight: ${props => (props.isactive ? 'bold' : 'normal')};
  font-size: 16px;
`

export const LinkText = styled.p`
  margin-left: 12px;
`

export const ContactUsSection = styled.div`
  margin-top: auto;
  margin-left: 20px;
`

export const Heading = styled.h1`
  font-size: 20px;
  line-height: 48px;
`

export const SocialMediaSection = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMediaIcon = styled.img`
  height: 28px;
  margin-right: 15px;
`

export const Parah = styled.p`
  line-height: 24px;
  font-size: 14px;
  padding: 20px;
  padding-left: 0;
`
