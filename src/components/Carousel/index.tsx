import React from "react";
//Styles
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from "./style";
//Types
import { Category } from "../../utils/types";
//Components
import VideoCard from './components/VideoCard';

type Props = {
  ignoreFirstVideo: boolean;
  category: Category;
};

const VideoCardGroup: React.FC<Props> = ({ ignoreFirstVideo, category }) => (
  <VideoCardGroupContainer>
    {category.title && (
      <>
        <Title style={{ backgroundColor: category.color || "red" }}>
          {category.title}
        </Title>
        {category.link_extra && (
          <ExtraLink href={category.link_extra.url} target="_blank">
            {category.link_extra.text}
          </ExtraLink>
        )}
      </>
    )}
    <VideoCardList>
          {category.videos.map((video, index) => {
            if(ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <li key={video.title}>
                <VideoCard
                  videoTitle={video.title}
                  videoUrl={video.url}
                  categoryColor={category.color}
                />
              </li>
            );
          })}
    </VideoCardList>
  </VideoCardGroupContainer>
);

export default VideoCardGroup;
