import React from "react";
import VideoItem from "./VideoItem";

//destructure paramater
const VideoList = ({ videoList, onVideoSelect }) => {
  const vidList = videoList.map((video, index) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{vidList}</div>;
};

export default VideoList;
