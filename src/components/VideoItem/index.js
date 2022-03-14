/* eslint-disable camelcase */
// import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoThumbnail,
  ProfilePic,
  VideoTitle,
  VideoChannelName,
  VideoTrends,
  VideoItemBottomSection,
} from './styledComponents'

const VideoItem = ({VideoDetails}) => {
  const {
    // id,
    title,
    thumbnail_url,
    channel,
    view_count,
    published_at,
  } = VideoDetails
  const {name, profile_image_url} = channel

  return (
    <VideoItemContainer>
      <VideoThumbnail
        alt={title}
        src={thumbnail_url}
        className="animate__animated animate__fadeIn animate__fast"
      />
      <VideoItemBottomSection>
        <ProfilePic
          alt={name}
          src={profile_image_url}
          className="animate__animated animate__zoomIn animate__slow"
        />
        <div>
          <VideoTitle>{title}</VideoTitle>
          <VideoChannelName>{name}</VideoChannelName>
          <VideoTrends>
            {view_count} views - {published_at}
          </VideoTrends>
        </div>
      </VideoItemBottomSection>
    </VideoItemContainer>
  )
}

export default VideoItem
