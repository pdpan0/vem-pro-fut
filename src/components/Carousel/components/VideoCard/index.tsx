import React from 'react';
//Styles
import { VideoCardContainer } from './style';
//Utils
import getYouTubeId from '../../../../utils/getYouTubeId';

type Props = {
  videoTitle: string,
  videoUrl: string,
  categoryColor: string
}

const VideoCard: React.FC<Props> = ({ videoUrl, videoTitle, categoryColor }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoUrl}
      target="_blank"
      style={{borderColor: categoryColor || 'red'}}
      title={videoTitle}
    />
  );
}

export default VideoCard;