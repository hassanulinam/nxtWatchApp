import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  flex-grow: 1;
  margin: 10px;
  width: 300px;
  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }
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
export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const VideoChannelName = styled.p`
  font-size: 14px;
  color: gray;
  line-height: 18px;
`

export const VideoTrends = styled.p`
  font-size: 14px;
  color: gray;
  line-height: 18px;
`
