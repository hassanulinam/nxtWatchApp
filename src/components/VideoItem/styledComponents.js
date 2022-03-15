import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FlexGrowLi = styled.li`
  list-style-type: none;
  width: 300px;
  padding: 0;
  flex-grow: 1;
  margin: 15px 8px;
  @media screen and (max-width: 767px) {
    margin: 15px 10px;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`

export const VideoItemContainer = styled.div`
  width: 100%;
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoItemBottomSection = styled.div`
  display: flex;
`
export const ProfilePic = styled.img`
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`

export const VideoChannelName = styled.p`
  font-size: 14px;
  color: gray;
  line-height: 16px;
`

export const VideoTrends = styled.p`
  font-size: 14px;
  color: gray;
  line-height: 16px;
`
