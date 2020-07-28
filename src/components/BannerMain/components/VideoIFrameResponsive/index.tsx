import React from 'react';
//Style
import { VideoContainer, ResponsiveIframe } from './style';

type Props = {
  title: string,
  youtubeID: string
}

const YouTubeIframeResponsive: React.FC<Props> = ({ title, youtubeID }) => (
  <VideoContainer>
    <ResponsiveIframe 
      title={title}
      src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay;
      encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoContainer>
);

export default YouTubeIframeResponsive;