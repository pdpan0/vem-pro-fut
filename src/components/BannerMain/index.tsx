import React from "react";

import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./style";
//Components
import VideoIframeResponsive from "./components/VideoIFrameResponsive";

type Props = {
  videoTitle: string;
  videoDescription: string;
  url: string;
};

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

const BannerMain: React.FC<Props> = ({ videoTitle, videoDescription, url }) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
        <ContentAreaContainer.Item>
          <VideoIframeResponsive title={"oi"} youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
